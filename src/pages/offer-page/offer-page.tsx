import { useParams } from 'react-router-dom';
import { Logo } from '../../components/logo/logo';
import { TDetail } from '../../mocks/details';
import { Offer } from '../../components/offer/offer';
import { NotFoundPage } from '../not-found-page/not-found-page';

type TOfferPageProps = {
  details: TDetail[];
};

const OfferPage = ({ details }: TOfferPageProps) => {
  const { id } = useParams();
  const currentDetails = details.find((detail) => detail.id === id);
  const pageContent = currentDetails ? (
    <Offer offerDetails={currentDetails} />
  ) : (
    <NotFoundPage />
  );

  // eslint-disable-next-line no-console
  console.log('id', id, currentDetails);

  return (
    <div className="page">
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
                    <span className="header__favorite-count">3</span>
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
      {pageContent}
    </div>
  );
};

export { OfferPage };
