import { name, date, datatype } from 'faker';
import { TOffer } from '../types/offer';
import { TComment } from '../types/review';

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

export const makeFakeComments = (hasDate = true): TComment[] =>
  new Array(3).fill(null).map(
    () =>
      ({
        date: hasDate ? date.recent().toISOString() : null,
      } as TComment)
  );
