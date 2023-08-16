import { FavoriteButtonClassName } from '../../const';
import { FavoriteButton, TProxyFavoriteButtonProps } from './favorite-button';

const DetailsFavoriteButton = ({
  offerId,
  isFavorite,
}: TProxyFavoriteButtonProps) => (
  <FavoriteButton
    className={FavoriteButtonClassName.Details}
    offerId={offerId}
    isFavorite={isFavorite}
  />
);

export { DetailsFavoriteButton };
