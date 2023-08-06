import { useEffect } from 'react';
import { AppRoute, AuthStatus } from '../../const';
import { FavoritesPage } from '../../pages/favorites-page/favorites-page';
import { LoginPage } from '../../pages/login-page/login-page';
import { MainPage } from '../../pages/main-page/main-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OfferPage } from '../../pages/offer-page/offer-page';
import { FavoritesEmptyPage } from '../../pages/favorites-empty-page/favorites-empty-page';
import { OfferNotLoggedPage } from '../../pages/offer-not-logged-page/offer-not-logged-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';
import { PrivateRoute } from '../private-route/private-route';
import { OFFERS } from '../../mocks/offers';
import { TOffer } from '../../types/offer';
import { TDetail } from '../../types/details';
import { TReview } from '../../types/review';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { loadOffers } from '../../store/async-actions';

type TAppProps = {
  details: TDetail[];
  reviews: TReview[];
  nearPlaces: TOffer[];
};

const App = ({ details, reviews, nearPlaces }: TAppProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadOffers());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route index path={AppRoute.Root} element={<MainPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavoritesPage offers={OFFERS} authStatus={AuthStatus.Auth} />
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
};

export { App };
