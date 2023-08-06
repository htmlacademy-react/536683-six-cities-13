const AUTH_STORAGE_KEY = 'cities-auth-token';

export type TToken = string;

const getToken = (): TToken => {
  const token = localStorage.getItem(AUTH_STORAGE_KEY);

  return token ?? '';
};

const setToken = (token: TToken): void => {
  localStorage.setItem(AUTH_STORAGE_KEY, token);
};

const dropToken = (): void => {
  localStorage.removeItem(AUTH_STORAGE_KEY);
};

export { getToken, setToken, dropToken };
