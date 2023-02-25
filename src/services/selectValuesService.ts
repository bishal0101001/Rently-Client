import { SelectOption } from "@components/ui/SelectInput/SelectInput";
import { ListingCategories } from "src/enums/listingCategoryEnums";

export const numericSelectValues: SelectOption<number>[] = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 6,
    label: "6",
  },
  {
    value: 7,
    label: "7",
  },
];

export const categoryOptions: SelectOption<ListingCategories>[] = [
  { label: "Room", value: ListingCategories.ROOM },
  { label: "Apartment", value: ListingCategories.APARTMENT },
  { label: "Flat", value: ListingCategories.FLAT },
  { label: "House", value: ListingCategories.HOUSE },
];
