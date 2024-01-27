import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Item } from "@radix-ui/react-dropdown-menu";
import { CartSet, updatedecrement, updateIncrement } from "./CookieSave";
import { getCookie, setCookie } from "cookies-next";

const initialState: Cart = {
  product: [],
  jmlh: 0,
};

const DataCart = getCookie("CartItems");
DataCart ? "" : setCookie("CartItems", []);
const data = DataCart ? JSON.parse(String(DataCart)) : "";
if (DataCart) {
  initialState.product = data.reverse();
  initialState.jmlh = data.reduce(
    (acc: number, item: Cartitems) => acc + Number(item.Qty),
    0
  );
}

export const Cart = createSlice({
  name: "ProductCart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<Cartitems>) => {
      const product = state.product.find(
        (items) => items.id === action.payload.id
      );
      if (product) {
        if (
          typeof state.jmlh === "number" &&
          product.Qty <= Number(product.stock) -1
        ) {
          state.jmlh++;
          product.Qty++;
          console.log("updated")
          updateIncrement(action.payload);
        }
      } else {
        state.product.push(action.payload);
        if (typeof state.jmlh === "number") state.jmlh++;
        CartSet(action.payload);
      }
    },
    decrement: (state, action: PayloadAction<Cartitems>) => {
      const product = state.product.find(
        (items) => items.id === action.payload.id
      );
      if (product?.Qty === 1) {
        if (typeof state.jmlh === "number") state.jmlh--;
        state.product = state.product.filter(
          (items) => items.ProductName !== action.payload.ProductName
        );
        CartSet(action.payload);
      } else {
        if (typeof product?.Qty === "number") product.Qty--;
        if (typeof state.jmlh === "number") state.jmlh--;
        updatedecrement(action.payload);
      }
    },
    SetCheck: (state, action: PayloadAction<Cartitems>) => {
      const product = state.product.find(
        (items) => items.id === action.payload.id
      );
      if (product) {
        product.isChecked = !product.isChecked;
      }
    },
    SetCheckAll: (state, action: PayloadAction<Boolean>) => {
      for (let i = 0; i < state.product.length; i++) {
        state.product[i].isChecked = !action.payload;
      }
    },
  },
});

export const { increment, decrement, SetCheck, SetCheckAll } = Cart.actions;
export default Cart.reducer;
