import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { TCity, TOffer } from '../../types/offer';
import { useMap } from '../../hooks/use-map';

type MapProps = {
  points: TOffer[];
  selectedPoint?: TOffer;
  city: TCity;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
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
