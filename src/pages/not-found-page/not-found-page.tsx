import { Link } from 'react-router-dom';
import styles from './not-found-page.module.css';
import { AppRoute } from '../../const';

const NotFoundPage = () => (
  <div
    className={`page ${styles['page--not-found']}`}
    data-testid="not-found-page"
  >
    <main className="page__main page__main--favorites page__main--favorites-empty">
      <div className="page__favorites-container container">
        <section
          className={`favorites ${styles['favorites--empty']} favorites--empty`}
        >
          <h1 className="visually-hidden">Not Found (404)</h1>
          <div
            className={`favorites__status-wrapper ${styles['favorites__status-wrapper--empty']}`}
          >
            <b className="favorites__status">404 Not found.</b>
            <Link to={AppRoute.Root} className={styles['favorites__link']}>
              Go to main page
            </Link>
          </div>
        </section>
      </div>
    </main>
  </div>
);

export { NotFoundPage };
