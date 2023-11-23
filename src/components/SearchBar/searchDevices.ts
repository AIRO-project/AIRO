import { DeviceT } from "/src/types/DeviceT";

function searchDevices(
  searchValue: string,
  devices: DeviceT[]
): DeviceT[] | null {
  if (!devices) return null;

  const lowerSearchValue = searchValue.toLowerCase();
  const maxMatches = 200;

  const matchingDevices = devices.reduce((result, device) => {
    if (
      device.name.toLowerCase().includes(lowerSearchValue) ||
      device.address.toLowerCase().includes(lowerSearchValue)
    ) {
      if (result.length < maxMatches) {
        result.push(device);
      } else {
        return result;
      }
    }
    return result;
  }, [] as DeviceT[]);

  return matchingDevices;
}

export default searchDevices;
