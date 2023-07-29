type TLocationListProps = {
  locations: string[];
};

const LocationList = ({ locations }: TLocationListProps) => (
  <section className="locations container">
    <ul className="locations__list tabs__list">
      {locations.map((location) => (
        <li key={location} className="locations__item">
          <a href="#" className="locations__item-link tabs__item">
            <span>{location}</span>
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export { LocationList };
