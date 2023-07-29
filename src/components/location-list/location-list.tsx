import { SyntheticEvent } from 'react';

type TLocationListProps = {
  locations: string[];
  onLocationClick: (location: string) => void;
};

const LocationList = ({ locations, onLocationClick }: TLocationListProps) => (
  <section className="locations container">
    <ul className="locations__list tabs__list">
      {locations.map((location) => (
        <li key={location} className="locations__item">
          <a
            href="#"
            className="locations__item-link tabs__item"
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
