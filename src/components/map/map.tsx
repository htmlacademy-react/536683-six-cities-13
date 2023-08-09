import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { PATH_MARKER_DEFAULT, PATH_MARKER_CURRENT } from '../../const';
import { TCity, TOffer } from '../../types/offer';
import { useMap } from '../../hooks/use-map';
import { TDetail } from '../../types/details';

type MapProps = {
  points: (TOffer | TDetail)[];
  selectedPoint?: TOffer | TDetail;
  city: TCity;
};

const defaultCustomIcon = new Icon({
  iconUrl: PATH_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

const currentCustomIcon = new Icon({
  iconUrl: PATH_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

const Map = ({ city, points, selectedPoint }: MapProps) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      const { latitude, longitude, zoom } = city.location;

      map.setView([latitude, longitude], zoom);

      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            selectedPoint && point.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, city, points, selectedPoint]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
};

export { Map };
