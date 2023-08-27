import { render, screen } from '@testing-library/react';
import { OffersSorting } from './offers-soritng';

describe('Component: Sorting', () => {
  it('should render correct', () => {
    const sortingTestId = 'sorting';
    const sortTypeTestId = 'sort-type-item';
    const expectedSortTypeCount = 4;
    const expectedCallback = (sortType: string): void => {
      // eslint-disable-next-line no-console
      console.log(sortType);
    };

    render(<OffersSorting onSortTypeClick={expectedCallback} />);

    const sorting = screen.getByTestId(sortingTestId);
    const sortTypeItems = screen.getAllByTestId(sortTypeTestId);

    expect(sorting).toBeInTheDocument();
    expect(sortTypeItems.length).toBe(expectedSortTypeCount);
  });
});
