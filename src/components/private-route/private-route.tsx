import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type TPrivateRouteProps = PropsWithChildren<{
  authorizationStatus: AuthorizationStatus;
}>;

const PrivateRoute = (props: TPrivateRouteProps) => {
  const { authorizationStatus, children } = props;

  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} replace />
  );
};

export { PrivateRoute };
