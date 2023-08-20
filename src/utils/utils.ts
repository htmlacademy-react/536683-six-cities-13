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
};
