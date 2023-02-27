import React, { useState } from "react";
import { FaUserEdit, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdEditLocationAlt } from "react-icons/md";

import { Navbar, Line, Loading } from "@components/common";
import { BoxInput, Button } from "@components/ui";
import { useSelector } from "react-redux";
import { selectUser } from "./../slices/userSlice";
import withAuth from "src/hocs/withAuth";

type Props = {};

const myprofile = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const { userDetails, isAuthenticated } = useSelector(selectUser);

  const handleSave = (e: React.FormEvent) => {
    console.log(e);
  };

  if (!isAuthenticated) return <Loading />;
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-start mx-16 pt-20">
        <h1 className="text-2xl font-bold mx-auto mb-5">My Profile</h1>
        {/* <Line style="border-light2 my-5" /> */}
        <div className="flex justify-between w-full px-5 gap-5">
          <ul className="basis-[25%] font-semibold">
            <li className="p-2 bg-light rounded text-center w-full cursor-pointer ">
              My details
            </li>
            <li className="p-2 rounded text-center cursor-pointer hover:bg-superLight">
              Property
            </li>
            <li className="p-2 rounded text-center cursor-pointer hover:bg-superLight">
              Preferences
            </li>
          </ul>
          <div className="basis-[55%]">
            <BoxInput
              label="Name"
              onChange={setName}
              inputWrapperStyle="bg-transparent border border-primary"
              inputStyle="text-primary bg-transparent font-medium"
              labelStyle="text-primary"
              Icon={FaUserEdit}
              iconColor="black"
              val="Bishal Shrestha"
              disabled={true}
            />
            <BoxInput
              label="Email"
              onChange={setEmail}
              inputWrapperStyle="bg-transparent border border-primary"
              inputStyle="text-primary bg-transparent font-medium"
              labelStyle="text-primary"
              Icon={MdEmail}
              iconColor="black"
              val={
                userDetails && userDetails.email ? userDetails.email : undefined
              }
              disabled={true}
            />
            <BoxInput
              label="Phone"
              onChange={setPhone}
              inputWrapperStyle="bg-transparent border border-primary"
              inputStyle="text-primary bg-transparent font-medium"
              labelStyle="text-primary"
              Icon={FaPhoneAlt}
              iconColor="black"
              val={
                userDetails && userDetails.phone ? userDetails.phone : undefined
              }
              disabled={true}
            />
            <BoxInput
              label="Address"
              onChange={setAddress}
              inputWrapperStyle="bg-transparent border border-primary"
              inputStyle="text-primary bg-transparent font-medium"
              labelStyle="text-primary"
              Icon={MdEditLocationAlt}
              iconColor="black"
              val=""
              disabled={true}
            />
            <Button href="#" label="Save" onClick={handleSave} />
            <Button href="#" label="Edit" />
          </div>
          {/* <div className="basis-[20%]">
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default withAuth(myprofile);
