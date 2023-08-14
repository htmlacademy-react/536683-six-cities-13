import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { UserMenu } from '../../components/user-menu/user-menu';
import { Favorites } from './favorites';

const FavoritesPage = () => (
  <div className="page">
    <Header>
      <UserMenu />
    </Header>
    <Favorites />
    <Footer />
  </div>
);

export { FavoritesPage };
