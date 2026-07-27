import { configureStore } from "@reduxjs/toolkit";
import  TodoReducer  from "../features/todoslice";

export const store=configureStore({
    reducer:{
       todo: TodoReducer,
    }
})