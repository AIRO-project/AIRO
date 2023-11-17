export type Device = {
  name: string;
  description: string;
  coords: { lat: number; lng: number };
  address: string;
  user: string;
  id?: string;
};
