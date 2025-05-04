import React from "react";
import { PiNavigationArrowFill } from "react-icons/pi";

const Navbar = () => {
  const link = (
    <>
      <li className="border-r">
        <a>Add Course</a>
      </li>
      <li className="border-r">
        <a>Create Course</a>
      </li>
      <li>
        <button className="btn btn-primary  rounded-full">Log In</button>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 border-b">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Odemy</a>
        </div>

        {/* Window */}

        <div className="hidden md:flex">
          <div className=" flex-none   ">
            <ul className="menu menu-horizontal px-1 gap-2">{link}</ul>
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
