import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';

type TPrivateRouteProps = PropsWithChildren;

const PrivateRoute = ({ children }: TPrivateRouteProps) => {
  const authStatus = useAppSelector((store) => store.authStatus);

  return authStatus === AuthStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} replace />
  );
};

export { PrivateRoute };
