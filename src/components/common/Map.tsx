import React from "react";
import {
  GoogleMap,
  OverlayView,
  OverlayViewF,
  useLoadScript,
} from "@react-google-maps/api";
import { twMerge } from "tailwind-merge";
import { SiHomeadvisor } from "react-icons/si";
import { IconType } from "react-icons";
import { Listing } from "./../../interface/Listings";
import Link from "next/link";

interface MapProps {
  markers?: MarkerType[];
  center?: google.maps.LatLngLiteral;
  zoom?: number;
  style?: string;
  Icon?: IconType;
  iconColor?: string;
  iconSize?: string;
  listings?: Listing[];
}

export interface MarkerType {
  id: string;
  position: google.maps.LatLngLiteral;
}

const Map: React.FC<MapProps> = ({
  markers,
  center = { lat: 28.212889, lng: 83.975578 },
  zoom = 13,
  style,
  Icon = SiHomeadvisor,
  iconColor = "red",
  iconSize = 30,
  listings,
}) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBs_AaJ4CzvgnftMtLeO88fDiBAqxPIxA0",
    libraries: ["places"],
  });
  const className = twMerge(`w-full h-full ${style}`);
  const options = {
    disableDefaultUI: true,
  };
  const getPixelPositionOffset = (
    offsetWidth: number,
    offsetHeight: number
  ) => ({
    x: -(offsetWidth / 2),
    y: -(offsetHeight / 2),
  });

  if (loadError) return <div>Map cannot be loaded right now, sorry.</div>;

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName={className}
      center={center}
      zoom={zoom}
      mapContainerStyle={{ height: "100%", width: "100%" }}
      options={options}
    >
      {listings
        ? listings.map((listing) => (
            <>
              <OverlayViewF
                position={listing.address.position}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                getPixelPositionOffset={getPixelPositionOffset}
              >
                <Link href={`/listing/${listing.id}`}>
                  <Icon
                    color="red"
                    size={iconSize}
                    className="bg-primary rounded-full p-1 cursor-pointer"
                  />
                </Link>
              </OverlayViewF>
            </>
          ))
        : markers?.map((marker) => (
            <>
              <OverlayViewF
                position={marker.position}
                mapPaneName={OverlayView.MARKER_LAYER}
                getPixelPositionOffset={getPixelPositionOffset}
              >
                <Icon
                  color="red"
                  size={iconSize}
                  className="bg-primary rounded-full p-1"
                />
              </OverlayViewF>
            </>
          ))}
    </GoogleMap>
  ) : (
    <div>Loading....</div>
  );
};

export default Map;
