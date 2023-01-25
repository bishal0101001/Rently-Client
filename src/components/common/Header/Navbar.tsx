import Link from "next/link";
import React from "react";
import { MdAccountCircle, MdOutlineNotificationsNone } from "react-icons/md";
import { Logo } from "@components/ui";
import { Noty } from "@components/icons";

interface NavProps {
  navItems: any;
}

const Navbar: React.FC<NavProps> = ({ navItems }) => {
  const notifications = 0;
  return (
    <nav className="flex justify-between items-center px-16 w-full h-16 backdrop-blur-sm bg-white/70 fixed z-[99999] border border-b-dark ">
      <div className="basis-1/2">
        <Logo
          textStyle="text-2xl md:text-2xl"
          imgStyle="w-7 h-7 md:w-7 md:h-7"
        />
      </div>
      <div className="basis-1/2 justify-end">
        <ul className="flex justify-end gap-x-4 items-center">
          <li>
            <Link
              href="/mylistings"
              className="py-2 px-7 rounded-full border-2 border-primary"
            >
              My listings
            </Link>
          </li>
          <li>
            {notifications > 0 ? (
              <MdOutlineNotificationsNone />
            ) : (
              <Noty width="24px" count={notifications} />
            )}
          </li>
          <li>
            <MdAccountCircle size={25} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
