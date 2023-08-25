import { AuthStatus } from '../../const';
import { checkAuthStatus, login, logout } from '../async-actions';
import { userProcess } from './user-process';

describe('UserProcess slice', () => {
  it('should return initial state with empty action', () => {
    const initialState = {
      authStatus: AuthStatus.Unknown,
      userEmail: '',
    };
    const emptyAction = { type: '' };

    const result = userProcess.reducer(initialState, emptyAction);

    expect(result).toEqual(initialState);
  });

  it('should return default initial state with empty action', () => {
    const expectedState = {
      authStatus: AuthStatus.Unknown,
      userEmail: '',
    };
    const emptyAction = { type: '' };

    const result = userProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should update "authStatus field" with "login.pending" action', () => {
    const expectedState = {
      authStatus: AuthStatus.Unknown,
      userEmail: '',
    };

    const result = userProcess.reducer(undefined, login.pending);

    expect(result).toEqual(expectedState);
  });

  it('should update "authStatus field" and "userEmail" filed with "login.fulfilled" action', () => {
    const userData = {
      email: 'test@gmail.ru',
      password: '100500',
    };
    const { email: userEmail } = userData;
    const expectedState = {
      authStatus: AuthStatus.Auth,
      userEmail,
    };

    const result = userProcess.reducer(
      undefined,
      login.fulfilled(userEmail, '', userData)
    );

    expect(result).toEqual(expectedState);
  });

  it('should update "authStatus field" with "login.rejected" action', () => {
    const expectedState = {
      authStatus: AuthStatus.Unknown,
      userEmail: '',
    };

    const result = userProcess.reducer(undefined, login.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should update "authStatus field" with "logout.fulfilled" action', () => {
    const expectedState = {
      authStatus: AuthStatus.NoAuth,
      userEmail: '',
    };

    const result = userProcess.reducer(undefined, logout.fulfilled);

    expect(result).toEqual(expectedState);
  });

  it('should update "authStatus field" with "logout.rejected" action', () => {
    const expectedState = {
      authStatus: AuthStatus.Unknown,
      userEmail: '',
    };

    const result = userProcess.reducer(undefined, logout.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should update "authStatus field" with "checkAuthStatus.pending" action', () => {
    const expectedState = {
      authStatus: AuthStatus.Unknown,
      userEmail: '',
    };

    const result = userProcess.reducer(undefined, checkAuthStatus.pending);

    expect(result).toEqual(expectedState);
  });

  it('should update "authStatus field" and "userEmail" field with "checkAuthStatus.fulfilled" action', () => {
    const userEmail = 'check@gmail.ru';
    const expectedState = {
      authStatus: AuthStatus.Auth,
      userEmail,
    };

    const result = userProcess.reducer(
      undefined,
      checkAuthStatus.fulfilled(userEmail, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should update "authStatus" field with "checkAuthStatus.rejected" action', () => {
    // const expectedState = {
    //   authStatus: AuthStatus.Unknown,
    //   userEmail: '',
    // };
    // const result = userProcess.reducer(undefined, checkAuthStatus.rejected);
    // expect(result).toEqual(expectedState);
  });
});
