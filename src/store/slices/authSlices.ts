import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { loginUser } from '../actions'

interface Hub {
  id:string;
  companyName:string;


}

interface AuthState {
  token: string | null;
  userInfo: any | null;
  isApproved: boolean;
  organisations: Hub[]
}

const initialState: AuthState = {
  token: null,
  userInfo: null,
  isApproved: false,
  organisations: []
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    checkAuth: (state) => {
      // logic to check auth from localStorage or elsewhere can go here
    },
    logout: (state) => {
      state.token = null
      state.userInfo = null
      state.isApproved = false

      localStorage.removeItem("token")
      localStorage.removeItem("current_user")
      localStorage.removeItem("companyOrg")
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      const { token, user } = payload.data;

      state.token = token;
      state.userInfo = user;
      state.isApproved = user?.approved;

      localStorage.setItem("token", token);
      localStorage.setItem("current_user", JSON.stringify(user));
      localStorage.setItem("companyOrg", JSON.stringify(user?.organisations));
    });
  },
})

export const { checkAuth, logout } = authSlice.actions

export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer
