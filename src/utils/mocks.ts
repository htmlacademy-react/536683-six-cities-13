import { name, lorem, date, datatype } from 'faker';
import { TOffer } from '../types/offer';
import { TComment } from '../types/review';
import { TDetail } from '../types/details';

export const makeFakeOffers = (allFalse = false): TOffer[] =>
  new Array(3).fill(null).map(
    () =>
      ({
        isFavorite: allFalse ? false : datatype.boolean(),
        city: {
          name: name.title(),
        },
      } as TOffer)
  );

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

export const makeFakeComments = (hasDate = true): TComment[] =>
  new Array(3).fill(null).map(
    () =>
      ({
        date: hasDate ? date.recent().toISOString() : null,
      } as TComment)
  );
