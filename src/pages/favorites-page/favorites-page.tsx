import { FavoritesList } from '../../components/favorites-list/favorites-list';
import { Footer } from '../../components/footer/footer';
import { Logo } from '../../components/logo/logo';
import { UserMenu } from '../../components/user-menu/user-menu';
import { AuthStatus } from '../../const';
import { TOffer } from '../../types/offer';

type TFavoritesPageProps = {
  offers: TOffer[];
  authStatus: AuthStatus;
};

const FavoritesPage = ({ offers, authStatus }: TFavoritesPageProps) => (
  <div className="page">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <UserMenu authStatus={authStatus} />
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
