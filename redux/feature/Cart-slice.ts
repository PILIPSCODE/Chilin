import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: Cart = {
  product: [],
  jmlh: 0,
};
console.log(initialState);
export const Cart = createSlice({
  name: "ProductCart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<Cartitems>) => {
      const product = state.product.find(
        (items) => items.id === action.payload.id
      );

      if (product) {
        if (typeof state.jmlh === "number") state.jmlh++;
        product.Qty++;
      } else {
        state.product.push(action.payload);

        if (typeof state.jmlh === "number") state.jmlh++;
      }
    },
    decrement: (state, action: PayloadAction<Cartitems>) => {
      const product = state.product.find(
        (items) => items.id === action.payload.id
      );
      if (product?.Qty === 1) {
        if (typeof state.jmlh === "number") state.jmlh --;
       state.product = state.product.filter(
          (items) => items.ProductName !== action.payload.ProductName
        );
       
      } else {
        if (typeof product?.Qty === "number") product.Qty--
        if (typeof state.jmlh === "number") state.jmlh --;
      }
    },
  },
});

export const { increment,decrement } = Cart.actions;
export default Cart.reducer;
