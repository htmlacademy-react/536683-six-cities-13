import { useParams } from 'react-router-dom';
import { Offer } from '../../components/offer/offer';
import { NotFoundPage } from '../not-found-page/not-found-page';
import { Header } from '../../components/header/header';
import { UserMenu } from '../../components/user-menu/user-menu';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { loadDetails } from '../../store/async-actions';

const OfferPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const currentDetails = useAppSelector((store) => store.details);
  const currentNearPlaces = useAppSelector((store) => store.nearPlaces);
  const currentComments = useAppSelector((store) => store.comments);

  useEffect(() => {
    let isMounted = true;

    if (isMounted && id) {
      dispatch(loadDetails({ offerId: id }));
    }

    return () => {
      isMounted = false;
    };
  }, [id, dispatch]);

  const pageContent = currentDetails ? (
    <Offer
      offerDetails={currentDetails}
      nearPlaces={currentNearPlaces}
      comments={currentComments}
    />
  ) : (
    <NotFoundPage />
  );

  return (
    <div className="page">
      <Header>
        <UserMenu />
      </Header>
      {pageContent}
    </div>
  );
};

export { OfferPage };
