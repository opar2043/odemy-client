import { useUser, SignedOut, UserButton } from "@clerk/clerk-react";
import React from "react";
import { PiNavigationArrowFill } from "react-icons/pi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading";

const Navbar = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const navigate = useNavigate();

  const link = (
    <>
      <li className="border-r">
        <NavLink to={"/dashboard/add"}>
          <a>Add Course</a>
        </NavLink>
      </li>
      <li className="border-r">
        <a>Create Course</a>
      </li>
      {user ? (
        <UserButton>
          <SignedOut></SignedOut>
        </UserButton>
      ) : (
        <li>
          <Link to={"/login"}>
            <button className="btn btn-primary  rounded-full">Log In</button>
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 border-b flex justify-between px-3 md:px-7">
        <div className="flex items-center gap-2">
          <img src="/Odemy.png" className="w-9 h-9 rounded-full" />
          <h2 className="text-2xl font-bold text-blue-700 ">Odemy</h2>
        </div>

        {/* Window */}

        <div className="hidden md:flex">
          <div className=" flex-none   ">
            <ul className="menu flex items-center menu-horizontal px-1 gap-2">{link}</ul>
          </div>
        </div>

        {/* Mobile */}

        <div className="drawer md:hidden justify-end">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn text-purple-600 drawer-button"
            >
              <PiNavigationArrowFill />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {link}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
