import { render, screen } from '@testing-library/react';
import { Spinner } from './spinner';

describe('Component: Spinner', () => [
  it('should render correct', () => {
    const spinnerTestId = 'spinner';

    render(<Spinner />);

    const spinner = screen.getByTestId(spinnerTestId);

    expect(spinner).toBeInTheDocument();
  }),
]);
