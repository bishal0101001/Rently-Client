import Link from "next/link";
import React from "react";
import { MdAccountCircle, MdOutlineNotificationsNone } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { Logo } from "@components/ui";
import { Noty } from "@components/icons";
import { useSelector } from "react-redux";
import { selectUser } from "src/slices/userSlice";
import SearchBar from "../SearchBar";
import { doSignOut } from "src/config/firebase";

interface NavProps {
  isSearch?: boolean;
  isHome?: boolean;
}

const Navbar: React.FC<NavProps> = ({ isSearch = false, isHome = false }) => {
  const notifications = 0;

  const { isAuthenticated } = useSelector(selectUser);

  const handleSignOut = async () => {
    await doSignOut();
  };

  return (
    <nav className="flex justify-between items-center w-full h-16 backdrop-blur-sm bg-white/70 fixed z-[99999] border border-b-dark px-10 md:justify-center md:px-16">
      <div className="justify-center items-start mr-40 md:mr-96 lg:mr-[700px]">
        <Logo
          textStyle="text-2xl justify-start md:text-2xl"
          imgStyle="w-7 h-7 md:w-7 md:h-7"
        />
      </div>
      {isAuthenticated && isSearch && (
        <div className="basis-1/2 items-center">
          <SearchBar />
        </div>
      )}
      <div className="justify-end">
        <ul className="flex justify-end gap-x-4 items-center">
          {isAuthenticated ? (
            <>
              <li>
                {isHome ? (
                  <Link
                    href="/savedlistings"
                    className="py-2 px-7 rounded-full border-2 border-primary"
                  >
                    Saved Listings
                  </Link>
                ) : (
                  <Link
                    href="/mylistings"
                    className="py-2 px-7 rounded-full border-2 border-primary"
                  >
                    My listings
                  </Link>
                )}
              </li>
              <li>
                {notifications > 0 ? (
                  <MdOutlineNotificationsNone />
                ) : (
                  <Noty width="24px" count={notifications} />
                )}
              </li>
              <li className="cursor-pointer">
                <Link href="/myprofile">
                  <MdAccountCircle size={25} />
                </Link>
              </li>

              <li className="cursor-pointer" onClick={handleSignOut}>
                <IoMdLogOut size={25} />
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  href="/auth/signup"
                  className="py-1.5 px-4 rounded-full border-2 border-primary font-semibold"
                >
                  Signup
                </Link>
              </li>
              <li>
                <Link
                  href="/auth/login"
                  className="py-2 px-5 rounded-full bg-primary text-secondary font-semibold"
                >
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
