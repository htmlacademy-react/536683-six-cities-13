import { memo } from 'react';
import { MAX_OFFER_GALLERY_PICTURES } from '../../const';

type TOfferGalleryProps = {
  images: string[];
};

const Gallery = ({ images }: TOfferGalleryProps) => (
  <div className="offer__gallery" data-testid="offer-gallery">
    {images.slice(0, MAX_OFFER_GALLERY_PICTURES).map((image) => (
      <div
        key={image}
        className="offer__image-wrapper"
        data-testid="offer-gallery-image"
      >
        <img className="offer__image" src={image} alt="Photo studio" />
      </div>
    ))}
  </div>
);

const OfferGallery = memo(Gallery);

export { OfferGallery };
