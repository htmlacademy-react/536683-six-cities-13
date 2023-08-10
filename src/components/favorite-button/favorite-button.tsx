import { SyntheticEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/use-app-selector';
import { AppRoute, AuthStatus, FAVORITE_BUTTON_SIZE } from '../../const';
import { loadDetails, setFavorite } from '../../store/async-actions';
import cn from 'classnames';

type TFavoriteButtonProps = {
  offerId: string;
  isFavorite: boolean;
  className: string;
};

export type TProxyFavoriteButtonProps = Omit<TFavoriteButtonProps, 'className'>;

const FavoriteButton = ({
  offerId,
  isFavorite,
  className,
}: TFavoriteButtonProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isOfferFavorite, setIsOfferFavorite] = useState<boolean>(isFavorite);
  const authStatus = useAppSelector((store) => store.authStatus);
  const buttonSize = FAVORITE_BUTTON_SIZE[className];

  const handleFavoriteClick = (evt: SyntheticEvent) => {
    evt.preventDefault();

    if (authStatus === AuthStatus.NoAuth || authStatus === AuthStatus.Unknown) {
      navigate(AppRoute.Login);

      return;
    }

    setIsOfferFavorite((prevIsOfferFavotire) => !prevIsOfferFavotire);
    dispatch(
      setFavorite({ favoriteId: offerId, status: Number(!isOfferFavorite) })
    );
    dispatch(loadDetails({ offerId }));
  };

  return (
    <button
      className={`${className}__bookmark-button ${cn({
        [`${className}__bookmark-button--active`]: isOfferFavorite,
      })} button`}
      onClick={handleFavoriteClick}
      type="button"
    >
      <svg className={`${className}__bookmark-icon`} style={buttonSize}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

export { FavoriteButton };
