import { AppRoute, AuthorizationStatus } from '../../const';
import { FavoritesPage } from '../../pages/favorites-page/favorites-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { MainPage } from '../../pages/main-page/main-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OfferPage } from '../../pages/offer-page/offer-page';
import { FavoritesEmptyPage } from '../../pages/favorites-empty-page/favorites-empty-page';
import { MainEmptyPage } from '../../pages/main-empty-page/main-empty-page';
import { OfferNotLoggedPage } from '../../pages/offer-not-logged-page/offer-not-logged-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { PrivateRoute } from '../private-route/private-route';
import { TOffer } from '../../mocks/offers';
import { Offer } from '../offer/offer';

type TAppProps = {
  offers: TOffer[];
};

const App = ({ offers }: TAppProps) => (
  <BrowserRouter>
    <Routes>
      <Route
        index
        path={AppRoute.Root}
        element={<MainPage offers={offers} />}
      />
      <Route path={AppRoute.DevRoot} index element={<MainEmptyPage />} />
      <Route path={AppRoute.Login} element={<LoginPage />} />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <FavoritesPage />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.DevFavotites} element={<FavoritesEmptyPage />} />
      <Route path={AppRoute.Offer} element={<OfferPage />}>
        <Route path=":id" element={<Offer />} />
      </Route>
      <Route path={AppRoute.DevOffer} element={<OfferNotLoggedPage />} />
      <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export { App };
