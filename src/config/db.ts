import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "./firebase";

export const db = getFirestore(app);

export const getListings = async () => {
  const querySnapshot = await getDocs(collection(db, "listings"));
  return querySnapshot;
  // querySnapshot.forEach((doc) => {
  //   data = `${doc.id} => ${doc.data()}`;
  // });
};
