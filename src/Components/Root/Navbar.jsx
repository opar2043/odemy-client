import { useUser, SignedOut, UserButton } from "@clerk/clerk-react";
import React from "react";
import { FaList } from "react-icons/fa";
import { PiNavigationArrowFill } from "react-icons/pi";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, isLoaded } = useUser();

  const link = (
    <>
      {user ? (
        <>
          <li>
            <NavLink
              to="/dashboard/add"
              className="text-black hover:text-white border border-black px-4 py-2 rounded-lg hover:bg-black transition"
            >
              Add Course
            </NavLink>
          </li>
          <li>
            <button className="text-black hover:text-white border border-black px-4 py-2 rounded-lg hover:bg-black transition">
              Create Course
            </button>
          </li>
          <li>
            <UserButton afterSignOutUrl="/" />
          </li>
        </>
      ) : (
        <>
          <li>
            <p className="text-black border border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition">
              People Reaction
            </p>
          </li>
          <li>
            <Link to="/login">
              <button className="text-black border border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition">
                Log In
              </button>
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <header className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/Odemy.png" className="w-9 h-9 rounded-full" alt="Logo" />
          <h1 className="text-2xl font-bold text-black">Odemy</h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex ">
          <ul className="flex gap-4 items-center">{link}</ul>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden drawer z-50 justify-items-end">
          <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content ">
            <label htmlFor="mobile-drawer" className="btn btn-sm border border-black text-black hover:bg-black hover:text-white rounded-lg ">
              <FaList size={20} />
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="mobile-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-64 min-h-full bg-white text-black space-y-3">
              {link}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
