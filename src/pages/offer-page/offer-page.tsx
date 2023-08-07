import { useParams } from 'react-router-dom';
import { Offer } from '../../components/offer/offer';
import { NotFoundPage } from '../not-found-page/not-found-page';
import { Header } from '../../components/header/header';
import { UserMenu } from '../../components/user-menu/user-menu';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { loadDetails } from '../../store/async-actions';
import { Spinner } from '../../components/spinner/spinner';

const OfferPage = () => {
  const { id } = useParams();
  const currentDetails = useAppSelector((store) => store.details);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let isMounted = true;

    if (isMounted && id) {
      dispatch(loadDetails({ offerId: id }));
    }

    return () => {
      isMounted = false;
    };
  }, [id, dispatch]);

  // const currentDetails = details.find((detail) => detail.id === id);
  // const currentReviews = reviews.find((review) => review.id === id);

  const pageContent = currentDetails ? (
    <Offer offerDetails={currentDetails} />
  ) : (
    <NotFoundPage />
  );

  return (
    <div className="page">
      <Header>
        <UserMenu />
      </Header>
      <Spinner />
      {pageContent}
    </div>
  );
};

export { OfferPage };
