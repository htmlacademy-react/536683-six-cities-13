import { FavoriteButtonClassName } from '../../const';
import {
  FavoriteButton,
  TProxyFavoriteButtonProps,
} from '../favorite-button/favorite-button';

const MainFavoriteButton = ({
  offerId,
  isFavorite,
}: TProxyFavoriteButtonProps) => (
  <FavoriteButton
    className={FavoriteButtonClassName.Main}
    offerId={offerId}
    isFavorite={isFavorite}
  />
);

export { MainFavoriteButton };
