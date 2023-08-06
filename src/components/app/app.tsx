import { AppRoute } from '../../const';
import { FavoritesPage } from '../../pages/favorites-page/favorites-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { MainPage } from '../../pages/main-page/main-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OfferPage } from '../../pages/offer-page/offer-page';
import { OfferNotLoggedPage } from '../../pages/offer-not-logged-page/offer-not-logged-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { PrivateRoute } from '../private-route/private-route';
import { TOffer } from '../../types/offer';
import { TDetail } from '../../types/details';
import { TReview } from '../../types/review';

type TAppProps = {
  details: TDetail[];
  reviews: TReview[];
  nearPlaces: TOffer[];
};

const App = ({ details, reviews, nearPlaces }: TAppProps) => (
  <BrowserRouter>
    <Routes>
      <Route index path={AppRoute.Root} element={<MainPage />} />
      <Route path={AppRoute.Login} element={<LoginPage />} />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute>
            <FavoritesPage />
          </PrivateRoute>
        }
      />
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
