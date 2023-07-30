import { useState } from 'react';
import { SORT_TYPES } from '../../const';
import cn from 'classnames';

const OffersSorting = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sortTypeName = SORT_TYPES[activeIndex];

  const handleSortClick = () => {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSortClick}
      >
        {sortTypeName}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${cn({
          'places__options--opened': isOpened,
        })}`}
      >
        {SORT_TYPES.map((sortType, index) => (
          <li
            key={sortType}
            className={`places__option ${cn({
              'places__option--active': activeIndex === index,
            })}`}
            tabIndex={0}
            onClick={() => setActiveIndex(index)}
          >
            {sortType}
          </li>
        ))}
      </ul>
    </form>
  );
};

export { OffersSorting };
