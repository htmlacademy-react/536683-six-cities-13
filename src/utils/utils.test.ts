import { TComment } from '../types/review';
import { makeFakeComments, makeFakeOffers } from './mocks';
import {
  calculateRating,
  capitalizeFirstLetter,
  getCommentDate,
  getMachineDate,
  getUniqueFavoriteCities,
  sortCommentsFromNewToOld,
} from './utils';

describe('Utility functions', () => {
  describe('Function: getUniqueFavoriteCities', () => {
    it('should return an array of city names, if incoming arrays item "isFavorite" flag is "true"', () => {
      const fakeOffers = makeFakeOffers();
      const correctResult = [
        ...fakeOffers.reduce((initial, current) => {
          if (current.isFavorite) {
            return initial.add(current.city.name);
          }

          return initial;
        }, new Set<string>()),
      ];
      const result = getUniqueFavoriteCities(fakeOffers);

      expect(result).toEqual(correctResult);
    });

    it('should return an empty array if incoming arrays item "isFavorite" flag is "false"', () => {
      const fakeOffers = makeFakeOffers(true);
      const correctResult: string[] = [];
      const result = getUniqueFavoriteCities(fakeOffers);

      expect(result).toEqual(correctResult);
    });
  });

  describe('Function: sortCommentsFromNewToOld', () => {
    it('should return sorted from new to old comments array', () => {
      const fakeComments = makeFakeComments();
      const correctResult = fakeComments.sort(
        (commentA, commentB) =>
          Number(new Date(commentB.date)) - Number(new Date(commentA.date))
      );
      const result = sortCommentsFromNewToOld(fakeComments);

      expect(result).toEqual(correctResult);
    });

    it('should return empty array if passed argument is empty array', () => {
      const fakeComments: TComment[] = [];
      const correctResult: TComment[] = [];
      const result = sortCommentsFromNewToOld(fakeComments);

      expect(result).toEqual(correctResult);
    });

    it('should return empty array if passed argument has "null" date value', () => {
      const fakeComments = makeFakeComments(false);
      const correctResult: TComment[] = [];
      const result = sortCommentsFromNewToOld(fakeComments);

      expect(result).toEqual(correctResult);
    });
  });

  describe('Function: calculateRating', () => {
    it('should return transformed and rounded number between 0 and 100', () => {
      const testValue = 2.4;
      const correctResult = 40;
      const result = calculateRating(testValue);

      expect(result).toBe(correctResult);
    });

    it('should return positive number if argument is a negative number', () => {
      const testValue = -2.4;
      const correctResult = 40;
      const result = calculateRating(testValue);

      expect(result).toBe(correctResult);
    });
  });

  describe('Function: getCommentDate', () => {
    it('should return formatted as "MONTH FULLYEAR" string', () => {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      const testValue = new Date().toISOString();
      const currentDate = new Date(testValue);
      const correctResult = `${
        months[currentDate.getMonth()]
      } ${currentDate.getFullYear()}`;
      const result = getCommentDate(testValue);

      expect(result).toBe(correctResult);
    });
  });

  describe('Function: getMachineDate', () => {
    it('should return machine date string from regular date string', () => {
      const testValue = new Date().toISOString();
      const correctResult = testValue.slice(0, testValue.indexOf('T'));
      const result = getMachineDate(testValue);

      expect(result).toBe(correctResult);
    });

    it('should return current machine date string if passed argument is random string', () => {
      const testValue = 'check100500';
      const isoDate = new Date().toISOString();
      const correctResult = isoDate.slice(0, isoDate.indexOf('T'));
      const result = getMachineDate(testValue);

      expect(result).toBe(correctResult);
    });
  });

  describe('Function: capitalizeFirstLetter', () => {
    it('should return string with first letter capitalized', () => {
      const testValue = 'check';
      const correctResult = 'Check';
      const result = capitalizeFirstLetter(testValue);

      expect(result).toBe(correctResult);
    });

    it('should return empty string if passed argument is empty string', () => {
      const testValue = '';
      const correctResult = '';
      const result = capitalizeFirstLetter(testValue);

      expect(result).toBe(correctResult);
    });
  });
});
