import { SyntheticEvent } from 'react';
import cn from 'classnames';

type TLocationListProps = {
  locations: string[];
  currentLocation: string;
  onLocationClick: (location: string) => void;
};

const LocationList = ({
  locations,
  currentLocation,
  onLocationClick,
}: TLocationListProps) => (
  <section className="locations container">
    <ul className="locations__list tabs__list">
      {locations.map((location) => (
        <li key={location} className="locations__item">
          <a
            href="#"
            className={`locations__item-link tabs__item ${cn({
              'tabs__item--active': location === currentLocation,
            })}`}
            onClick={(evt: SyntheticEvent) => {
              evt.preventDefault();

              onLocationClick(location);
            }}
          >
            <span>{location}</span>
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export { LocationList };
