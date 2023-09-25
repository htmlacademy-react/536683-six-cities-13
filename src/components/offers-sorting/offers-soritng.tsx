import { useState, memo } from 'react';
import { SORT_TYPES } from '../../const';
import cn from 'classnames';

type TOffersSortingProps = {
  onSortTypeClick: (sortType: string) => void;
};

const Sorting = ({ onSortTypeClick }: TOffersSortingProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sortTypeName = SORT_TYPES[activeIndex];

  const handleSortClick = () => {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  };

  const arrowStyle = isOpened ? 'translateY(-50%) rotate(-180deg)' : '';

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      data-testid="sorting"
    >
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSortClick}
        data-testid="places-sort-button"
      >
        {sortTypeName}
        <svg
          className="places__sorting-arrow"
          style={{ transform: arrowStyle }}
          width={7}
          height={4}
          data-testid="places-arrow"
        >
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${cn({
          'places__options--opened': isOpened,
        })}`}
        data-testid="places-dropdown"
      >
        {SORT_TYPES.map((sortType, index) => (
          <li
            key={sortType}
            className={`places__option ${cn({
              'places__option--active': activeIndex === index,
            })}`}
            tabIndex={0}
            onClick={() => {
              setActiveIndex(index);
              setIsOpened(false);
              onSortTypeClick(sortType);
            }}
            data-testid="sort-type-item"
          >
            {sortType}
          </li>
        ))}
      </ul>
    </form>
  );
};

const OffersSorting = memo(Sorting);

export { OffersSorting };
