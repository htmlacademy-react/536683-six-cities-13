import { Link } from 'react-router-dom';
import styles from './not-found-page.module.css';
import { AppRoute } from '../../const';
import { Logo } from '../../components/logo/logo';
import { Footer } from '../../components/footer/footer';

const NotFoundPage = () => (
  <div className={`page ${styles['page--not-found']}`}>
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a
                  className="header__nav-link header__nav-link--profile"
                  href="#"
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">
                    Oliver.conner@gmail.com
                  </span>
                  <span className="header__favorite-count">0</span>
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  <span className="header__signout">Sign out</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <main className="page__main page__main--favorites page__main--favorites-empty">
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <h1 className="visually-hidden">Not Found (404)</h1>
          <div className="favorites__status-wrapper">
            <b className="favorites__status">404 Not found.</b>
            <Link to={AppRoute.Root} className={styles['favorites__link']}>
              Go to main page
            </Link>
          </div>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export { NotFoundPage };
