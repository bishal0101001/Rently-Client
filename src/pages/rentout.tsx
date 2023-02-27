import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { storage } from "src/config/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import {
  MdOutlineTitle,
  MdDescription,
  MdEditLocationAlt,
} from "react-icons/md";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaLandmark } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";
import { BsUpload } from "react-icons/bs";

import {
  BoxInput,
  Button,
  SelectInput,
  WaveSvg,
  ProgressBar,
  CheckBoxInput,
} from "@components/ui";
import {
  Navbar,
  Footer,
  Loading,
  Map,
  GoogleAutoComplete,
} from "@components/common";

import withAuth from "./../hocs/withAuth";

import { selectUser } from "src/slices/userSlice";
import { useAddListingMutation } from "src/slices/apiSlice";

import { ListingCategories } from "src/enums/listingCategoryEnums";
import { Listing } from "src/interface/Listings";

import {
  categoryOptions,
  numericSelectValues,
} from "../services/selectValuesService";
import { MarkerType } from "@components/common/Map";
// import { storeImageUrl } from "src/config/db";

interface Props {
  animationData?: any;
}

interface categoryState<T = {}> {
  selectedCategory: T;
}

interface Address {
  position: google.maps.LatLngLiteral;
  formattedAddress: string;
}

const initialCategoryState: categoryState<ListingCategories> = {
  selectedCategory: ListingCategories.ROOM,
};

const Rentout: React.FC<Props> = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [landmark, setLandmark] = useState("");
  const [category, setCategory] =
    useState<categoryState<ListingCategories>>(initialCategoryState);
  const [bathroom, setBathroom] = useState(1);
  const [room, setRoom] = useState(1);
  const [attachedBath, setAttachedBath] = useState(false);
  const [parking, setParking] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [floor, setFloor] = useState(1);
  const [price, setPrice] = useState("");
  const [img, setImg] = useState<string[]>([]);
  const [imageUpload, setImageUpload] = useState<File[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [place, setPlace] = useState<Address | null>(null);

  const { isAuthenticated, userDetails } = useSelector(selectUser);
  const [addListing, { isLoading, isError, error, isSuccess }] =
    useAddListingMutation();
  const router = useRouter();

  if (isError) {
    console.log(error, "Error");
  } else if (isSuccess) {
    router.push("/mylistings", undefined, { shallow: true });
  }

  const markers: MarkerType[] = [
    {
      id: "1",
      //@ts-ignore
      position: place ? place.position : userDetails?.currentLocation,
    },
  ];

  const center = { lat: 28.237988, lng: 83.99559 };
  const zoom = 13;

  const handleScroll = () => {
    window.scrollTo({ top: window.innerHeight * 0.8, behavior: "smooth" });
  };

  //@ts-ignore
  const handleCategoryChange = (newCategory: ListingCategories) => {
    setCategory({ ...category, selectedCategory: newCategory });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const listingDetails: Listing = {
      title,
      userId: userDetails!.id,
      description,
      address: {
        position: place!.position,
        title: place!.formattedAddress,
      },
      nearbyLandmark: landmark,
      details: {
        bed: room,
        bath: bathroom,
        attachedBath,
        wifi,
        parking,
        floor,
      },
      reserved: false,
      category: category.selectedCategory,
      price,
      img,
      lastUpdated: Date.now().toString(),
      createdAt: Date.now().toString(),
    };

    console.log(listingDetails, "listingDetails");

    await addListing(listingDetails);
    // await storeImageUrl(img);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const newSelectedImages: File[] = [];

      for (let i = 0; i < files.length && i < 10; i++) {
        newSelectedImages.push(files[i]);
      }

      setImageUpload((prev) => [...prev, ...newSelectedImages]);
    }
  };

  const handleImageUpload = async () => {
    for (const photo of imageUpload) {
      const storageRef = ref(
        storage,
        `/listings/${photo.name + Math.random()}`
      );
      const uploadTask = uploadBytesResumable(storageRef, photo);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          setIsUploading(true);
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);

          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log("Error uploading: ", error);
        },
        async () => {
          setIsUploading(false);
          console.log("Uploaded!.", uploadTask);
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setImg((prev) => [...prev, downloadURL]);
        }
      );
    }
  };

  useEffect(() => {
    console.log(place, "place");
    title.length === 0 ||
    description.length === 0 ||
    landmark.length === 0 ||
    price.length === 0
      ? setIsDisabled(true)
      : setIsDisabled(false);
  }, [title, description, landmark, price, place]);

  if (!isAuthenticated) return <Loading />;

  return (
    <>
      {isLoading && <Loading />}
      <div className="flex flex-col">
        <Navbar />
        <div className="flex flex-col px-16 items-center justify-center h-screen">
          <div className="flex justify-between mt-10 ">
            <div className="basis-1/2 flex flex-col justify-start items-start mr-10 z-[9999]">
              <h1 className="text-7xl font-extrabold cursor-pointer">
                Maximize your rental income with Rently.
              </h1>
              <p className="text-dark text-xl my-5 w-2/3">
                Effortlessly Rent Out Your Rooms and Enjoy a Hassle-Free Rental
                Experience
              </p>
              <button
                type="button"
                className="flex items-center justify-center h-10 px-10 py-6 bg-primary text-secondary rounded-full font-semibold mt-5 ease-in-out delay-100 transition-all hover:scale-110"
                onClick={handleScroll}
              >
                <span className="mr-2 ">Get Started</span>
                <HiArrowNarrowRight size={25} className="hover:scale-110" />
              </button>
            </div>
            <div className="basis-1/2 ">
              <video autoPlay loop className="w-full rounded">
                <source src="/assets/animated_room.mp4" />
              </video>
            </div>
          </div>
        </div>
        <WaveSvg />
        <div className="flex justify-between bg-primary h-auto text-secondary pl-16 z-50">
          <form
            className="basis-1/2 px-5 mx-auto h-fit"
            onSubmit={handleSubmit}
          >
            <h1 className="text-3xl font-bold mb-5">Add Details</h1>
            <BoxInput
              label="Title"
              placeholder="E.g: 2 big rooms"
              Icon={MdOutlineTitle}
              val={title}
              onChange={setTitle}
            />
            <BoxInput
              label="Description"
              placeholder="Describe about your listing."
              Icon={MdDescription}
              val={description}
              onChange={setDescription}
            />

            <BoxInput
              label="Location"
              Icon={MdEditLocationAlt}
              inputWrapperStyle="py-0"
            >
              <GoogleAutoComplete onSelect={(value) => setPlace(value)} />
            </BoxInput>
            <BoxInput
              label="Nearest landmark"
              Icon={FaLandmark}
              placeholder="E.g: Pokhara Engineering College"
              val={landmark}
              onChange={setLandmark}
            />
            <span className="flex w-full items-center">
              <SelectInput
                label="Categories"
                options={categoryOptions}
                onChange={handleCategoryChange}
                value={category.selectedCategory}
                rootStyle="mr-5"
              />
              <SelectInput
                label="Rooms"
                options={numericSelectValues}
                onChange={(value) => setRoom(value)}
                value={room}
              />
            </span>
            <span className="flex w-full items-center justify-center">
              <SelectInput
                label="Bathroom"
                options={numericSelectValues}
                rootStyle="mr-5"
                onChange={(value) => setBathroom(value)}
                value={bathroom}
              />
              <CheckBoxInput
                id="bathroom"
                label="Attached"
                rootStyle="mr-5"
                isChecked={attachedBath}
                handleChange={() => setAttachedBath(!attachedBath)}
              />
              <CheckBoxInput
                id="wifi"
                label="Wifi"
                rootStyle="mr-5"
                handleChange={() => setWifi(!wifi)}
                isChecked={wifi}
              />
              <CheckBoxInput
                id="parking"
                label="Parking"
                handleChange={() => setParking(!parking)}
                isChecked={parking}
              />
            </span>
            <SelectInput
              label="Floor"
              options={numericSelectValues}
              onChange={(value) => setFloor(value)}
              value={floor}
            />
            <BoxInput
              label="Price"
              Icon={IoMdPricetag}
              placeholder="Enter price"
              val={price}
              onChange={setPrice}
            />
            {isUploading && <ProgressBar progress={progress} />}

            <span className="flex w-full items-center justify-center">
              {/* <BoxInput
              label="Upload"
              Icon={BsUpload}
              type="file"
              placeholder="Upload images"
              isRequired={false}
              onChange={handleFileInputChange}
            /> */}
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileInputChange}
              />
              <button onClick={handleImageUpload} type="button">
                Upload
              </button>
            </span>

            <Button
              label="Submit"
              style={`${
                isDisabled
                  ? "text-dark bg-lightText"
                  : "text-primary bg-secondary"
              } !w-full`}
              rootStyle="w-full mt-6"
              isDisabled={isDisabled}
            />
          </form>
          <div className="basis-1/2 mx-auto overflow-hidden mb-10">
            <h1 className="text-3xl font-bold mx-auto mb-5">
              Drag the pointer
            </h1>
            <Map
              markers={markers}
              center={center}
              zoom={zoom}
              style="w-fit h-auto rounded-tl-lg"
              Icon={ImLocation2}
            />
          </div>
        </div>
        <Footer rootStyle="bg-secondary" style="text-primary" />
      </div>
    </>
  );
};

export default withAuth(Rentout);
