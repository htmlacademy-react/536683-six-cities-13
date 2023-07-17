const calculateRating = (rating: number): number => {
  const MAX_RATING = 5;

  return (rating * 100) / MAX_RATING;
};

const capitalizeFirstLetter = (word: string): string =>
  `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

export { calculateRating, capitalizeFirstLetter };
