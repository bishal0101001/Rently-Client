import { ListingCategories } from "src/enums/listingCategoryEnums";

export interface Listing {
  id?: string;
  userId: string;
  title: string;
  address: {
    position: google.maps.LatLngLiteral;
    title: string;
  };
  description: string;
  nearbyLandmark: string;
  price: string;
  createdAt?: string;
  lastUpdated?: string;
  img: string[];
  reserved: boolean;
  details: {
    bed: number;
    bath: number;
    attachedBath: boolean;
    wifi: boolean;
    parking: boolean;
    floor: number;
  };
  category: ListingCategories;
  comments?: {
    id: string;
    userId: string;
    comment: string;
  }[];
}
