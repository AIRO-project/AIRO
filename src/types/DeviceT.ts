export type DeviceT = {
  name: string;
  description: string;
  coords: { lat: number; lng: number };
  address: string;
  user: string;
  id?: string;
  metrics: {
    [key: string]: number;
  };
};
