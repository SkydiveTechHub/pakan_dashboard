import { createAsyncThunk } from "@reduxjs/toolkit";
import { startLoad, stopLoad } from "../slices/appSlice";
import AuthService from "../services/authService";
import { handleError } from ".";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: { email: string; password: string }, { dispatch }) => {
    dispatch(startLoad());
    try {
      const res = await AuthService.Login(data);
      return res;
    } catch (err) {
      handleError(err, dispatch);
    } finally {
      // stop loading eventually
      dispatch(stopLoad());
    }
  }
);