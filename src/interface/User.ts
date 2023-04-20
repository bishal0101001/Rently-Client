export interface User {
  id: string;
  name: string | null;
  email: string | null;
  phone?: string | null;
  address?: string;
  token?: string;
  currentLocation?: google.maps.LatLngLiteral;
  savedListings: { id: string }[];
  myListings: { id: string }[];
}
