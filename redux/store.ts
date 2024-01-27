import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useSelector } from "react-redux";
import CartReducer from "@/redux/feature/Cart-slice"
export const store = configureStore({
    reducer:{
    CartReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type Appdispatch = typeof store.dispatch
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;