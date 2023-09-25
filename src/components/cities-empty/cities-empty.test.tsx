import { render, screen } from '@testing-library/react';
import { CitiesEmpty } from './cities-empty';

describe('Component: CitiesEmpty', () => {
  it('should render correct', () => {
    const expectedProps = 'Paris';
    const citiesEmptyContainerTestId = 'cities-empty-container';

    render(<CitiesEmpty locationCity={expectedProps} />);

    const citiesEmptyContainer = screen.getByTestId(citiesEmptyContainerTestId);

    expect(citiesEmptyContainer).toBeInTheDocument();
    expect(citiesEmptyContainer).toHaveTextContent(/Paris/i);
  });

  it('should render correct with specific text', () => {
    const expectedProps = 'Paris';
    const expectedText = 'No places to stay available';

    render(<CitiesEmpty locationCity={expectedProps} />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
