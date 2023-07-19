import { FavoritesList } from '../../components/favorites-list/favorites-list';
import { Footer } from '../../components/footer/footer';
import { Logo } from '../../components/logo/logo';
import { UserMenu } from '../../components/user-menu/user-menu';
import { AuthorizationStatus } from '../../const';
import { TOffer } from '../../types/offer';

type TFavoritesPageProps = {
  offers: TOffer[];
  authorizationStatus: AuthorizationStatus;
};

const FavoritesPage = ({
  offers,
  authorizationStatus,
}: TFavoritesPageProps) => (
  <div className="page">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <UserMenu authorizationStatus={authorizationStatus} />
        </div>
      </div>
    </header>
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        {<FavoritesList offers={offers} />}
      </div>
    </main>
    <Footer />
  </div>
);

export { FavoritesPage };
