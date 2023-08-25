import { TOffer } from '../types/offer';
import { TComment } from '../types/review';

const getUniqueFavoriteCities = (offers: TOffer[]) => [
  ...offers.reduce((initial, current) => {
    if (current.isFavorite) {
      return initial.add(current.city.name);
    }

    return initial;
  }, new Set<string>()),
];

const calculateRating = (rating: number): number => {
  const MAX_RATING = 5;

  return (Math.round(Math.abs(rating)) * 100) / MAX_RATING;
};

const declension = (number: number, titles: string) => {
  const titlesArray = titles.split('|');
  const cases = [2, 0, 1, 1, 1, 2];

  return titlesArray[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};

const getCommentDate = (date: string): string => {
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
  const commentDate = new Date(date);

  return `${months[commentDate.getMonth()]} ${commentDate.getFullYear()}`;
};

const getMachineDate = (date: string) => {
  const isInvalidDate = isNaN(new Date(date).getTime());

  if (isInvalidDate) {
    const isoDate = new Date().toISOString();

    return isoDate.slice(0, isoDate.indexOf('T'));
  }

  return date.slice(0, date.indexOf('T'));
};

const capitalizeFirstLetter = (word: string): string =>
  `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

const sortCommentsFromNewToOld = (comments: TComment[]) => {
  if (!comments?.length) {
    return [];
  }

  if (comments.every((comment) => comment.date === null)) {
    return [];
  }

  return comments.sort(
    (commentA, commentB) =>
      Number(new Date(commentB.date)) - Number(new Date(commentA.date))
  );
};

export {
  getUniqueFavoriteCities,
  calculateRating,
  capitalizeFirstLetter,
  getCommentDate,
  getMachineDate,
  sortCommentsFromNewToOld,
  declension,
};
