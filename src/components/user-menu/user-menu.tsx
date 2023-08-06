import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';

const UserMenu = () => {
  const authStatus = useAppSelector((store) => store.authStatus);

  const userInfo =
    authStatus === AuthStatus.Auth ? (
      <Link
        className="header__nav-link header__nav-link--profile"
        to={AppRoute.Favorites}
      >
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__user-name user__name">
          Oliver.conner@gmail.com
        </span>
        <span className="header__favorite-count">3</span>
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
        <a className="header__nav-link" href="#">
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
