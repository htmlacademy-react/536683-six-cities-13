import { createSlice } from '@reduxjs/toolkit';
import { AuthStatus, NameSpace } from '../../const';
import { TState } from '../reducer';
import { checkAuthStatus, login, logout } from '../async-actions';

type TUserProcessState = Pick<TState, 'userEmail' | 'authStatus'>;

const initialState: TUserProcessState = {
  authStatus: AuthStatus.Unknown,
  userEmail: '',
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.authStatus = AuthStatus.Unknown;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Auth;
        state.userEmail = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.authStatus = AuthStatus.Unknown;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authStatus = AuthStatus.NoAuth;
        state.userEmail = '';
      })
      .addCase(logout.rejected, (state) => {
        state.authStatus = AuthStatus.Unknown;
      })
      .addCase(checkAuthStatus.pending, (state) => {
        state.authStatus = AuthStatus.Unknown;
      })
      .addCase(checkAuthStatus.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Auth;
        state.userEmail = action.payload;
      })
      .addCase(checkAuthStatus.rejected, (state) => {
        state.authStatus = AuthStatus.Unknown;
      });
  },
});
