import { ListingCategories } from "src/enums/listingCategoryEnums";

export const myListings = [
  {
    id: "1",
    userId: "asD1",
    title: "Big hall for rent",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos architecto vero, dolor reprehenderit repudiandae at vel molestiae delectus laudantium illo veritatis, deleniti numquam. Officia sequi totam ea numquam fuga aperiam sapiente consequuntur, quia mollitia laudantium, quas voluptate aut nihil adipisci sunt veritatis quidem, voluptatibus aliquam molestiae reprehenderit optio eligendi veli quos doloremque. Assumenda, vel. Dolorem porro ipsam reiciendis veroommodi?",
    address: {
      location: "Srijana Chowk, Pokhara",
      lat: 12,
      long: 12,
    },
    nearbyLandmark: "Srijana Secondary School",
    updatedAt: "3 days ago",
    price: 5000,
    img: "/assets/image_login-min.jpg",
    reserved: true,
    details: {
      bed: 1,
      bath: 1,
      wifi: true,
      parking: false,
      floor: 1,
    },
    // category: ListingCategories.Room,
    comments: [
      {
        id: "c1",
        userId: "2",
        comment: "This is one of the best room",
      },
      {
        id: "c2",
        userId: "3",
        comment: "Best room",
      },
    ],
  },
  {
    id: "2",
    userId: "asD1",
    title: "Big hall for rent",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos architecto vero, dolor reprehenderit repudiandae at vel molestiae delectus laudantium illo veritatis, deleniti numquam. Officia sequi totam ea numquam fuga aperiam sapiente consequuntur, quia mollitia laudantium, quas voluptate aut nihil adipisci sunt veritatis quidem, voluptatibus aliquam molestiae reprehenderit optio eligendi veli quos doloremque. Assumenda, vel. Dolorem porro ipsam reiciendis veroommodi?",
    address: {
      location: "Srijana Chowk, Pokhara",
      lat: 12,
      long: 12,
    },
    nearbyLandmark: "Srijana Secondary School",
    price: 25000,
    updatedAt: "1 day ago",
    img: "/assets/livingroom-min.jpg",
    reserved: false,
    details: {
      bed: 1,
      bath: 1,
      wifi: true,
      parking: false,
      floor: 1,
    },
    // category: ListingCategories.Room,
    comments: [
      {
        id: "c1",
        userId: "2",
        comment: "This is one of the best room",
      },
      {
        id: "c2",
        userId: "3",
        comment: "Best room",
      },
    ],
  },
  {
    id: "3",
    userId: "asD1",
    title: "Big hall for rent",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos architecto vero, dolor reprehenderit repudiandae at vel molestiae delectus laudantium illo veritatis, deleniti numquam. Officia sequi totam ea numquam fuga aperiam sapiente consequuntur, quia mollitia laudantium, quas voluptate aut nihil adipisci sunt veritatis quidem, voluptatibus aliquam molestiae reprehenderit optio eligendi veli quos doloremque. Assumenda, vel. Dolorem porro ipsam reiciendis veroommodi?",
    address: {
      location: "Srijana Chowk, Pokhara",
      lat: 12,
      long: 12,
    },
    nearbyLandmark: "Srijana Secondary School",
    price: 5000,
    updatedAt: "3 days ago",
    img: "/assets/image_login-min.jpg",
    reserved: true,
    details: {
      bed: 1,
      bath: 1,
      wifi: true,
      parking: false,
      floor: 1,
    },
    // category: ListingCategories.Room,
    comments: [
      {
        id: "c1",
        userId: "2",
        comment: "This is one of the best room",
      },
      {
        id: "c2",
        userId: "3",
        comment: "Best room",
      },
    ],
  },
];

export const listingsData = [
  {
    id: "1",
    title: "Big hall for rent",
    address: "Srijana Chowk, Pokhara",
    nearbyLandmark: "Srijana Secondary School",
    updatedAt: "3 days ago",
    price: 5000,
    img: "/assets/image_login-min.jpg",
    reserved: true,
    details: {
      bed: 1,
      bath: 1,
      wifi: true,
      parking: false,
      floor: 1,
    },
    // category: ListingCategories.Room,
    comments: [
      {
        id: "c1",
        userId: "2",
        comment: "This is one of the best room",
      },
      {
        id: "c2",
        userId: "3",
        comment: "Best room",
      },
    ],
  },
  {
    id: "2",
    title: "3BHK Apartment",
    address: "Lake Side, Pokhara",
    nearbyLandmark: "Baskins Robbin",
    updatedAt: "3 days ago",
    img: "/assets/apartment_image.jpg",
    reserved: true,
    price: 50000,
    details: {
      bed: 2,
      bath: 1,
      wifi: true,
      parking: false,
      floor: 1,
    },
    // category: ListingCategories.Apartment,
    comments: [
      {
        id: "c1",
        userId: "2",
        comment: "This is one of the best room",
      },
      {
        id: "c2",
        userId: "3",
        comment: "Best room",
      },
    ],
  },
  {
    id: "3",
    title: "Beautiful flat",
    address: "Ratna Chowk, Pokhara",
    nearbyLandmark: "Srijana Secondary School",
    updatedAt: "3 days ago",
    img: "/assets/livingroom-min.jpg",
    reserved: true,
    price: 25000,
    details: {
      bed: 1,
      bath: 1,
      wifi: true,
      parking: false,
      floor: 1,
    },
    // category: ListingCategories.Room,
    comments: [
      {
        id: "c1",
        userId: "2",
        comment: "This is one of the best room",
      },
      {
        id: "c2",
        userId: "3",
        comment: "Best room",
      },
    ],
  },
  {
    id: "4",
    title: "Big hall for rent",
    address: "Srijana Chowk, Pokhara",
    nearbyLandmark: "Srijana Secondary School",
    updatedAt: "3 days ago",
    img: "/assets/image_login-min.jpg",
    reserved: true,
    price: 5000,
    details: {
      bed: 1,
      bath: 1,
      wifi: true,
      parking: false,
      floor: 1,
    },
    // category: ListingCategories.Room,
    comments: [
      {
        id: "c1",
        userId: "2",
        comment: "This is one of the best room",
      },
      {
        id: "c2",
        userId: "3",
        comment: "Best room",
      },
    ],
  },
  {
    id: "5",
    title: "Big hall for rent",
    address: "Srijana Chowk, Pokhara",
    nearbyLandmark: "Srijana Secondary School",
    updatedAt: "3 days ago",
    img: "/assets/image_login-min.jpg",
    reserved: true,
    price: 5000,
    details: {
      bed: 1,
      bath: 1,
      wifi: true,
      parking: false,
      floor: 1,
    },
    // category: ListingCategories.Room,
    comments: [
      {
        id: "c1",
        userId: "2",
        comment: "This is one of the best room",
      },
      {
        id: "c2",
        userId: "3",
        comment: "Best room",
      },
    ],
  },
];
