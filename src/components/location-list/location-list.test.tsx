import { render, screen } from '@testing-library/react';
import { LocationList } from './location-list';

describe('Component: LocationList', () => {
  it('should render correct', () => {
    const expectedLocations = ['Paris', 'Cologne', 'England'];
    const expectedLocationsCount = expectedLocations.length;
    const expectedCurrentLocation = 'Paris';
    const expectedCallBack = (location: string): void => {
      // eslint-disable-next-line no-console
      console.log(location);
    };
    const locationsTestId = 'locations';
    const locationItemTestId = 'location-item';

    render(
      <LocationList
        locations={expectedLocations}
        currentLocation={expectedCurrentLocation}
        onLocationClick={expectedCallBack}
      />
    );

    const locations = screen.getByTestId(locationsTestId);
    const locationItems = screen.getAllByTestId(locationItemTestId);

    expect(locations).toBeInTheDocument();
    expect(locationItems.length).toBe(expectedLocationsCount);
  });
});
