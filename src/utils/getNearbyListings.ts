import { Listing } from "src/interface/Listings";

export function getNearbyListings(
  listings: Listing[],
  localityLat: number,
  localityLng: number,
  radius: number
) {
  const R = 6371; // radius of Earth in km
  const localityBoundary = {
    north: localityLat + (radius / R) * (180 / Math.PI), // latitude of northern boundary
    south: localityLat - (radius / R) * (180 / Math.PI), // latitude of southern boundary
    east:
      localityLng +
      ((radius / R) * (180 / Math.PI)) /
        Math.cos((localityLat * Math.PI) / 180), // longitude of eastern boundary
    west:
      localityLng -
      ((radius / R) * (180 / Math.PI)) /
        Math.cos((localityLat * Math.PI) / 180), // longitude of western boundary
  };

  return listings.filter((listing) => {
    return (
      listing.address.position.lat <= localityBoundary.north &&
      listing.address.position.lat >= localityBoundary.south &&
      listing.address.position.lng <= localityBoundary.east &&
      listing.address.position.lng >= localityBoundary.west
    );
  });
}
