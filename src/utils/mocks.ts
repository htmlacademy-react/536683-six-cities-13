import { name, lorem, date, datatype } from 'faker';
import { TOffer } from '../types/offer';
import { TComment } from '../types/review';
import { TDetail } from '../types/details';

export const makeFakeOffers = ({
  count = 4,
  allFalse = false,
  allFavorites = false,
} = {}): TOffer[] =>
  new Array(count).fill(null).map((_, index) => {
    let isFavorite = false;

    if (!allFalse) {
      isFavorite = datatype.boolean();
    }

    if (allFavorites) {
      isFavorite = true;
    }

    return {
      id: `${index}`,
      isFavorite,
      city: {
        name: name.title(),
      },
    } as TOffer;
  });

export const makeFakeOfferDetails = (
  shouldReturnNull = false
): TDetail | null => {
  if (shouldReturnNull) {
    return null;
  }

  return {
    description: lorem.paragraph(3),
    bedrooms: 3,
  } as TDetail;
};

export const makeFakeComments = ({
  count = 3,
  hasDate = true,
} = {}): TComment[] =>
  new Array(count).fill(null).map(
    () =>
      ({
        date: hasDate ? date.recent().toISOString() : null,
      } as TComment)
  );
