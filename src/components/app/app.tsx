import { AppRoute } from '../../const';
import { Favorites } from '../../pages/favorites/favorites';
import { Login } from '../../pages/login/login';
import { Main } from '../../pages/main/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Offer } from '../../pages/offer/offer';
import { FavoritesEmpty } from '../../pages/favorites-empty/favorites-empty';
import { MainEmpty } from '../../pages/main-empty/main-empty';
import { OfferNotLogged } from '../../pages/offer-not-logged/offer-not-logged';
import { NotFound } from '../../pages/not-found/not-found';

type AppProps = {
  offerCount: number;
};

const App = (props: AppProps) => {
  const { offerCount } = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main offerCount={offerCount} />}
        />
        <Route path={AppRoute.DevRoot} index element={<MainEmpty />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Favorites} element={<Favorites />} />
        <Route path={AppRoute.DevFavotites} element={<FavoritesEmpty />} />
        <Route path={`${AppRoute.Offer}/:id`} element={<Offer />} />
        <Route path={AppRoute.DevOffer} element={<OfferNotLogged />} />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export { App };
