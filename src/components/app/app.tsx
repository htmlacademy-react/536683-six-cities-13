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
import { OFFERS } from '../../mocks/offers';
import { TCity, TOffer } from '../../types/offer';
import { TDetail } from '../../types/details';
import { TReview } from '../../types/review';

type TAppProps = {
  offers: TOffer[];
  details: TDetail[];
  reviews: TReview[];
  nearPlaces: TOffer[];
  city: TCity;
};

const App = ({ city, offers, details, reviews, nearPlaces }: TAppProps) => (
  <BrowserRouter>
    <Routes>
      <Route
        index
        path={AppRoute.Root}
        element={<MainPage city={city} offers={offers} />}
      />
      <Route path={AppRoute.DevRoot} index element={<MainEmptyPage />} />
      <Route path={AppRoute.Login} element={<LoginPage />} />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <FavoritesPage
              offers={OFFERS}
              authorizationStatus={AuthorizationStatus.Auth}
            />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.DevFavotites} element={<FavoritesEmptyPage />} />
      <Route
        path={`${AppRoute.Offer}/:id`}
        element={
          <OfferPage
            details={details}
            nearPlaces={nearPlaces}
            reviews={reviews}
          />
        }
      />
      <Route path={AppRoute.DevOffer} element={<OfferNotLoggedPage />} />
      <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export { App };
