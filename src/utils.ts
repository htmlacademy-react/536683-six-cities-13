import { TOffer } from './types/offer';
import { TComment } from './types/review';

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

  return (Math.round(rating) * 100) / MAX_RATING;
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

const getMachineDate = (date: string) => date.slice(0, date.indexOf('T'));

const capitalizeFirstLetter = (word: string): string =>
  `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

const sortCommentsFromNewToOld = (comments: TComment[]) =>
  comments.sort(
    (commentA, commentB) =>
      Number(new Date(commentB.date)) - Number(new Date(commentA.date))
  );

export {
  getUniqueFavoriteCities,
  calculateRating,
  capitalizeFirstLetter,
  getCommentDate,
  getMachineDate,
  sortCommentsFromNewToOld,
};
