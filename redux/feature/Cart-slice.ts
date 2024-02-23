import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartSet, CustomerSet, UpdateCustomerSet, updatedecrement, updateIncrement } from "./CookieSave";
import { getCookie, setCookie } from "cookies-next";
import { RootState } from "../store";


type InitialState={
  Cart:Cartitems[],
  CheckOut:CheckOut,
  jmlh:Number,
  Cost:Number,
  DataCustomer:DataCustomer[]
}
const initialState: InitialState = {
   Cart:[],
   CheckOut:{Address:0,city:""},
   Cost:0,
   jmlh:0,
   DataCustomer:[],
};

const DataCart = getCookie("CartItems");
DataCart ? "" : setCookie("CartItems", []);
const data = DataCart ? JSON.parse(String(DataCart)) : "";
if (DataCart) {
  initialState.Cart = data.reverse();
  initialState.jmlh = data.reduce(
    (acc: number, item: Cartitems) => acc + Number(item.Qty),
    0
  );
}

const DataCustomer = getCookie("MyDataAddrees");
DataCustomer ? "" : setCookie("MyDataAddrees", []);
const dataCus = DataCustomer ? JSON.parse(String(DataCustomer)) : "";
if (DataCustomer) {
  initialState.DataCustomer = dataCus.reverse();
}



export const Cart = createSlice({
  name: "ProductCart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<Cartitems>) => {
      const product = state.Cart.find(
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
        state.Cart.push(action.payload);
        if (typeof state.jmlh === "number") state.jmlh++;
        CartSet(action.payload);
      }
    },
    decrement: (state, action: PayloadAction<Cartitems>) => {
      const product = state.Cart.find(
        (items) => items.id === action.payload.id
      );
      if (product?.Qty === 1) {
        if (typeof state.jmlh === "number") state.jmlh--;
        state.Cart = state.Cart.filter(
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
      const product = state.Cart.find(
        (items) => items.id === action.payload.id
      );
      if (product) {
        product.isChecked = !product.isChecked;
      }
   
      
    },
    SetCheckAll: (state, action: PayloadAction<Boolean>) => {
      for (let i = 0; i < state.Cart.length; i++) {
        state.Cart[i].isChecked = !action.payload;
      }
    },
    RemoveProduct: (state, action: PayloadAction<Cartitems>) => {
      state.Cart = state.Cart.filter(
        (items) => items.id !== action.payload.id
      );
      const product = data.filter((item:Cartitems) => item.id !== action.payload.id)
      setCookie("CartItems",[])
      setCookie("CartItems",product)
     
    },
    RemoveProductAll: (state) => {
     state.Cart = [];
     setCookie("CartItems",[])
    },
    CheckOut:(state, action: PayloadAction<CheckOut>)=>{
      
        state.CheckOut = {Address:action.payload.Address,city:action.payload.city}
    },
    DataCustome: (state, action: PayloadAction<DataCustomer>)=> {
      const Customer = state.DataCustomer.find((e) => e.Email === action.payload.Email)

      if(Customer){
        const newArrayCustomer = state.DataCustomer.map((item:DataCustomer) => {
          if (item.Email === action.payload.Email) {
            return { ...item, Selected: true };
          }
          return { ...item, Selected: false };
        });
        state.DataCustomer = newArrayCustomer

        UpdateCustomerSet(action.payload)
      }else{
        state.DataCustomer.push(action.payload)
        CustomerSet(action.payload)
      }
    },
    DelDataCustome: (state, action: PayloadAction<DataCustomer>)=> {
      state.DataCustomer = state.DataCustomer.filter(e => e.Email !== action.payload.Email)
      CustomerSet(action.payload)
    },
    SetCosts:(state, action:PayloadAction<Number>) => {
      state.Cost = action.payload
    }
    
  },
});
const CartItem = (state: RootState) => state.CartReducer.Cart;

export const totalIsSelect = createSelector([CartItem], (cartItem) =>
  cartItem
    .filter((cartItem) => cartItem.isChecked === true)
    .reduce((previousValue: number, currentValue: Cartitems) => previousValue + Number(currentValue.Qty.valueOf()) * Number(currentValue.Price),0)
);
export const totalIsQty = createSelector([CartItem], (cartItem) =>
  cartItem
    .filter((cartItem) => cartItem.isChecked === true)
    .reduce((previousValue: number, currentValue: Cartitems) => previousValue + Number(currentValue.Qty.valueOf()),0)
);


export const { increment, DelDataCustome,decrement, SetCheck, SetCheckAll,SetCosts,RemoveProduct,RemoveProductAll,CheckOut,DataCustome} = Cart.actions;
export default Cart.reducer;
