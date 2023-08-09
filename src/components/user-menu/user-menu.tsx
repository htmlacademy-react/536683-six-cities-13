import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { SyntheticEvent } from 'react';
import { logout } from '../../store/async-actions';
import { useAppDispatch } from '../../hooks/use-app-dispatch';

const UserMenu = () => {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((store) => store.authStatus);
  const userEmail = useAppSelector((store) => store.userEmail);
  const favorites = useAppSelector((store) => store.favorites);

  const handleLogoutClick = (evt: SyntheticEvent) => {
    evt.preventDefault();

    dispatch(logout());
  };

  const userInfo =
    authStatus === AuthStatus.Auth ? (
      <Link
        className="header__nav-link header__nav-link--profile"
        to={AppRoute.Favorites}
      >
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__user-name user__name">{userEmail}</span>
        <span className="header__favorite-count">{favorites.length}</span>
      </Link>
    ) : (
      <Link
        className="header__nav-link header__nav-link--profile"
        to={AppRoute.Login}
      >
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__login">Sign in</span>
      </Link>
    );
  const userStatus =
    authStatus === AuthStatus.Auth ? (
      <li className="header__nav-item">
        <a className="header__nav-link" href="#" onClick={handleLogoutClick}>
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    ) : null;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">{userInfo}</li>
        {userStatus}
      </ul>
    </nav>
  );
};

export { UserMenu };
