import { render, screen } from '@testing-library/react';
import { OffersSorting } from './offers-soritng';
import userEvent from '@testing-library/user-event';

describe('Component: Sorting', () => {
  const expectedCallback = (sortType: string): void => {
    // eslint-disable-next-line no-console
    console.log(sortType);
  };

  it('should render correct', () => {
    const sortingTestId = 'sorting';
    const sortTypeTestId = 'sort-type-item';
    const expectedSortTypeCount = 4;

    render(<OffersSorting onSortTypeClick={expectedCallback} />);

    const sorting = screen.getByTestId(sortingTestId);
    const sortTypeItems = screen.getAllByTestId(sortTypeTestId);

    expect(sorting).toBeInTheDocument();
    expect(sortTypeItems.length).toBe(expectedSortTypeCount);
  });

  it('should render sorting dropdown correctly when arrow button is clicked', async () => {
    const placesSortButtonTestId = 'places-sort-button';
    const placesDropdownTestId = 'places-dropdown';
    const expectedClassName = 'places__options--opened';

    render(<OffersSorting onSortTypeClick={expectedCallback} />);

    const placesSortButton = screen.getByTestId(placesSortButtonTestId);

    await userEvent.click(placesSortButton);

    expect(screen.getByTestId(placesDropdownTestId)).toHaveClass(
      expectedClassName
    );
  });

  it('should render transformed arrow button icon correctly when sorting button is clicked', async () => {
    const placesSortButtonTestId = 'places-sort-button';
    const placesArrowTestId = 'places-arrow';
    const expectedStyles = 'transform: translateY(-50%) rotate(-180deg);';

    render(<OffersSorting onSortTypeClick={expectedCallback} />);

    const placesSortButton = screen.getByTestId(placesSortButtonTestId);
    const placesArrowIcon = screen.getByTestId(placesArrowTestId);

    await userEvent.click(placesSortButton);

    expect(placesArrowIcon).toHaveStyle(expectedStyles);
  });
});
