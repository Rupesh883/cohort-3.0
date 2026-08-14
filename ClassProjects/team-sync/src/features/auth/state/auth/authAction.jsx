import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../config/axiosINstance";
import axios from "axios";

export let LoginEmployee=createAsyncThunk("auth/login",
    async(credentials,thunkApi)=>{
        console.log(credentials)
    try {
         let response= await axiosInstance.post('api/auth/login',credentials)
         console.log(response)
         console.log("response console kar deaya")

         return response.data.data
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

export let currentLoggedIn = createAsyncThunk(
  "auth/me",
  async (_, thunkApi) => {
    try {
      let res = await axios.get(
        "https://team-sync-backend-n78w.onrender.com/api/auth/me",
        { withCredentials: true }
      );

      console.log("SUCCESS");
      console.log(res.data);

      return res.data;
    } catch (error) {
      console.log("ERROR");
      console.log(error);

      console.log("Status:", error.response?.status);
      console.log("Data:", error.response?.data);
      console.log("Headers:", error.response?.headers);

      return thunkApi.rejectWithValue(
        error.response?.data?.message || "Authentication failed"
      );
    }
  }
);