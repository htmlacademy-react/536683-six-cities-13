import { render, screen } from '@testing-library/react';
import { CitiesEmpty } from './cities-empty';

describe('Component: CitiesEmpty', () => {
  it('should render correct', () => {
    const expectedText = 'Paris';
    const citiesEmptyContainerTestId = 'cities-empty-container';

    render(<CitiesEmpty locationCity={expectedText} />);

    const citiesEmptyContainer = screen.getByTestId(citiesEmptyContainerTestId);

    expect(citiesEmptyContainer).toBeInTheDocument();
    expect(citiesEmptyContainer).toHaveTextContent(/Paris/i);
  });
});
