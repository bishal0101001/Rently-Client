import {
  addDoc,
  doc,
  collection,
  getFirestore,
  getDocs,
  getDoc,
  setDoc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
// import { deleteObject, ref } from "firebase/storage";
// import { storage } from "./firebase";

import { Listing } from "src/interface/Listings";
import app from "./firebase";
import { uuidv4 } from "@firebase/util";
import { User } from "./../interface/User";

export const db = getFirestore(app);

// export const storeImageUrl = async (url: string[]) => {
//   const imageId = uuidv4();
//   const storeImage = await setDoc(doc(db, "images", imageId), {
//     url,
//     timestamp: Date.now(),
//   });
//   console.log(storeImage, "storeImage");

//   return storeImage;
// };

export const getListings = async () => {
  const querySnapshot = await getDocs(collection(db, "listings"));
  const listings: Listing[] = querySnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      } as Listing)
  );
  return listings;
};

export const getListingsById = async (id: string) => {
  const docRef = doc(db, "listings", id);

  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return { error: "Listing does not exists" };
    }
  } catch (error) {
    return { error };
  }
};

export const getListingOwner = async (id: string) => {
  const docRef = doc(db, "users", id);

  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return { error: "User doesnot exists" };
    }
  } catch (error) {
    return { error };
  }
};

export const addListing = async ({ title, ...rest }: Listing) => {
  const data = { title, ...rest };
  const docRef = await addDoc(collection(db, "listings"), data);
  return docRef;
};

export const addUser = async ({ id, ...rest }: User) => {
  const docRef = await setDoc(doc(db, "users", id), { ...rest });
  return docRef;
};

// const imagesRef = collection(db, "images");
// const queryRef = query(
//   imagesRef,
//   where("timestamp", "<", Date.now() - 2 * 60 * 1000)
// );

// onSnapshot(queryRef, (snapshot) => {
//   snapshot.forEach((doc) => {
//     const imageURL = doc.data().url;
//     const imageRef = ref(storage, imageURL);
//     deleteObject(imageRef).then(() => {
//       console.log(`Deleted unused image with URL: ${imageURL}`);
//     });
//   });
// });
