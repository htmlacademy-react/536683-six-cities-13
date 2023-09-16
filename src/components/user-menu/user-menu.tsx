import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { SyntheticEvent } from 'react';
import { logout } from '../../store/async-actions';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import {
  getAuthStatus,
  getUserEmail,
} from '../../store/user-process/selectors';
import { getFavorites } from '../../store/favorites-process/selectors';

const UserMenu = () => {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);
  const userEmail = useAppSelector(getUserEmail);
  const favorites = useAppSelector(getFavorites);

  const handleLogoutClick = (evt: SyntheticEvent) => {
    evt.preventDefault();

    dispatch(logout());
  };

  const userInfo =
    authStatus === AuthStatus.Auth ? (
      <Link
        className="header__nav-link header__nav-link--profile"
        to={AppRoute.Favorites}
        data-testid="user-info"
      >
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__user-name user__name" data-testid="user-email">
          {userEmail}
        </span>
        <span
          className="header__favorite-count"
          data-testid="user-favorites-count"
        >
          {favorites.length}
        </span>
      </Link>
    ) : (
      <Link
        className="header__nav-link header__nav-link--profile"
        to={AppRoute.Login}
        data-testid="sign-in"
      >
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__login">Sign in</span>
      </Link>
    );
  const userStatus =
    authStatus === AuthStatus.Auth ? (
      <li className="header__nav-item" data-testid="sign-out">
        <a className="header__nav-link" href="#" onClick={handleLogoutClick}>
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    ) : null;

  return (
    <nav className="header__nav" data-testid="user-menu">
      <ul className="header__nav-list">
        <li className="header__nav-item user">{userInfo}</li>
        {userStatus}
      </ul>
    </nav>
  );
};

export { UserMenu };
