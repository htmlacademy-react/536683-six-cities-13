import { SyntheticEvent, useState } from 'react';
import cn from 'classnames';
import { DEFAULT_LOCATION } from '../../const';

type TLocationListProps = {
  locations: string[];
  onLocationClick: (location: string) => void;
};

const LocationList = ({ locations, onLocationClick }: TLocationListProps) => {
  const [selectedLocation, setSelectedLocation] =
    useState<string>(DEFAULT_LOCATION);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locations.map((location) => (
          <li key={location} className="locations__item">
            <a
              href="#"
              className={`locations__item-link tabs__item ${cn({
                'tabs__item--active': location === selectedLocation,
              })}`}
              onClick={(evt: SyntheticEvent) => {
                evt.preventDefault();

                setSelectedLocation(location);
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
};

export { LocationList };
