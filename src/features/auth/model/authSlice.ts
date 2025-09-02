import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

import { AUTH_KEY } from '../constant';
import { AuthState } from './type';

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  verificationId: null,
};

const authSlice = createSlice({
  name: AUTH_KEY,
  initialState,
  reducers: {
    // -------- Phone auth --------
    sendOtpRequest: (state, _action: PayloadAction<string>) => {
      state.loading = true;
    },
    sendOtpSuccess: (state, { payload }: PayloadAction<string>) => {
      state.loading = false;
      state.verificationId = payload;
    },
    sendOtpFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    verifyOtpRequest: (
      state,
      _action: PayloadAction<{ verificationId: string; code: string }>,
    ) => {
      state.loading = true;
    },
    verifyOtpSuccess: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
    },
    verifyOtpFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    // -------- Google auth --------
    googleLoginRequest: (state) => {
      state.loading = true;
    },
    googleLoginSuccess: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
    },
    googleLoginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
