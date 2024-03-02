interface Route {
  id: number;
  name: string;
  color: string;
}

interface BusMarkerProps {
  title: string;
  longitude: number;
  latitude: number;
}

export { Route, BusMarkerProps };