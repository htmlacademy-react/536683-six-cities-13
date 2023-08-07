import { useParams } from 'react-router-dom';
import { Offer } from '../../components/offer/offer';
import { NotFoundPage } from '../not-found-page/not-found-page';
import { TDetail } from '../../types/details';
import { TReview } from '../../types/review';
import { TOffer } from '../../types/offer';
import { Header } from '../../components/header/header';
import { UserMenu } from '../../components/user-menu/user-menu';

type TOfferPageProps = {
  details: TDetail[];
  reviews: TReview[];
  nearPlaces: TOffer[];
};

const OfferPage = ({ details, reviews, nearPlaces }: TOfferPageProps) => {
  const { id } = useParams();
  // что бы получить инфу, вызываем dispatch + асинхронное действие
  // которое заключает в себе axios, который принимает id
  // сервер будет отдавать инфу по текущему id
  // стор обновляется
  // через useSelector берём нужный кусок стора
  const currentDetails = details.find((detail) => detail.id === id);
  const currentReviews = reviews.find((review) => review.id === id);

  const pageContent = currentDetails ? (
    <Offer
      offerDetails={currentDetails}
      nearPlaces={nearPlaces}
      reviews={currentReviews}
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
