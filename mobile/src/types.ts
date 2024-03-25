interface Route {
  id: number;
  name: string;
  color: string;
}

interface BusMarkerProps {
  title: string;
  longitude: number;
  latitude: number;
  color: string;
}

interface LineProps {
  coordinates: { latitude: number; longitude: number }[];
}

interface CoordinateProps {
  latitude: number;
  longitude: number;
};

export { Route, BusMarkerProps, LineProps, CoordinateProps };
