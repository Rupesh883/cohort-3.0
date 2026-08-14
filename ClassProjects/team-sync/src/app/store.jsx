import { configureStore } from "@reduxjs/toolkit";
import authReducers from "../features/auth/state/auth/authSlice"

export let store=configureStore({
    reducer:{
    auth:authReducers
    }
}) 