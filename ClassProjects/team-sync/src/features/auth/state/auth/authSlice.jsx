import { createSlice } from "@reduxjs/toolkit";
import { currentLoggedIn, LoginEmployee } from "./authAction";

  let authSlice=createSlice({
    name:"auth",
    initialState:{
        employee:null,
        isLoading:false,
    },
    reducers:{
        addEmployee:(state,action)=>{
           state.employee=action.payload;
           state.isLoading=false
        },
        removeEmployee:(state,action)=>{
           state.employee=null;
           state.isLoading=false
        },
    },extraReducers:(builder)=>{
        builder.addCase(LoginEmployee.pending,(state)=>{
          state.isLoading=true
        })
        .addCase(LoginEmployee.fulfilled,(state,action)=>{
          state.employee=action.payload;
          state.isLoading=false;
        })
        .addCase(LoginEmployee.rejected,(state)=>{
          state.isLoading=false;
        }) 
        .addCase(currentLoggedIn.pending,(state)=>{
           state.isLoading=true
        })
        .addCase(currentLoggedIn.fulfilled,(state,action)=>{
          state.employee=action.payload;
          state.isLoading=false;
        })
        .addCase(currentLoggedIn.rejected,(state)=>{
          state.isLoading=false;
        })
    }

})

let {addEmployee,removeEmployee}=authSlice.actions
export default authSlice.reducer