import { ListingCategories } from "src/enums/listingCategoryEnums";

export interface Listing {
  id: string;
  userId: string;
  title: string;
  address: {
    location: {
      lat: number;
      long: number;
    };
    title: string;
  };
  description: string;
  nearbyLandmark: string;
  price: number;
  lastUpdated: string;
  img: string;
  reserved: boolean;
  details: {
    bed: number;
    bath: number;
    wifi: boolean;
    parking: boolean;
    floor: number;
  };
  category: ListingCategories;
  comments: {
    id: string;
    userId: string;
    comment: string;
  }[];
}
[];
