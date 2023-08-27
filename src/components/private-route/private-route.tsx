import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getAuthStatus } from '../../store/user-process/selectors';
import { Spinner } from '../spinner/spinner';

type TPrivateRouteProps = PropsWithChildren;

const PrivateRoute = ({ children }: TPrivateRouteProps) => {
  const authStatus = useAppSelector(getAuthStatus);

  if (authStatus === AuthStatus.Unknown) {
    return <Spinner />;
  }

  return authStatus === AuthStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
};

export { PrivateRoute };
