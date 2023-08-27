import { AuthStatus, NameSpace } from '../../const';
import { getAuthStatus, getUserEmail } from './selectors';

describe('UserProcess selectors', () => {
  const state = {
    [NameSpace.User]: {
      authStatus: AuthStatus.Auth,
      userEmail: 'hello@gmail.ru',
    },
  };

  it('should return user status', () => {
    const { authStatus } = state[NameSpace.User];
    const result = getAuthStatus(state);
    expect(authStatus).toBe(result);
  });

  it('should return user email', () => {
    const { userEmail } = state[NameSpace.User];
    const result = getUserEmail(state);
    expect(result).toBe(userEmail);
  });
});
