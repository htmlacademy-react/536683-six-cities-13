import { useParams } from 'react-router-dom';
import { Offer } from '../../components/offer/offer';
import { Header } from '../../components/header/header';
import { UserMenu } from '../../components/user-menu/user-menu';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import {
  loadComments,
  loadDetails,
  loadNearPlaces,
} from '../../store/async-actions';
import { Spinner } from '../../components/spinner/spinner';
import { LoadingStatus } from '../../const';
import {
  getOffer,
  getOfferLoadingStatus,
} from '../../store/offer-process/selectors';

const OfferPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const loadingStatus = useAppSelector(getOfferLoadingStatus);
  const currentDetails = useAppSelector(getOffer);
  const currentNearPlaces = useAppSelector((store) => store.nearPlaces);
  const currentComments = useAppSelector((store) => store.comments);

  useEffect(() => {
    let isMounted = true;

    if (isMounted && id) {
      dispatch(loadDetails({ offerId: id }));
      dispatch(loadComments({ offerId: id }));
      dispatch(loadNearPlaces({ offerId: id }));
    }

    return () => {
      isMounted = false;
    };
  }, [id, dispatch]);

  if (loadingStatus === LoadingStatus.Loading) {
    return <Spinner />;
  }

  return (
    <div className="page">
      <Header>
        <UserMenu />
      </Header>
      <Offer
        offerDetails={currentDetails}
        nearPlaces={currentNearPlaces}
        comments={currentComments}
      />
    </div>
  );
};

export { OfferPage };
