import React from "react";
import { CiSearch } from "react-icons/ci";

const Banner = () => {
  return (
    <div>
      <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-screen max-w-screen-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto w-full md:max-w-4xl text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
              Empower your future with the courses designed to
              <strong className="text-indigo-600"> fit your choice </strong>
            </h1>

            <p className="mt-6 font-semibold  text-pretty text-gray-600 text-sm">
              We bring together world-class instructors, interactive content,
              and a supportive community to help you achieve your personal and
              professional goals.
            </p>

            <div className="mt-6 flex flex-row justify-between items-center gap-4 p-2 border rounded-xl shadow-md bg-white w-full md:w-2/3 mx-auto">
              <div className="w-full flex items-center pl-2">
                <CiSearch />
                <input
                  type="email"
                  id="email"
                  placeholder="Search for Course"
                  className="w-full rounded-lg  px-4 py-2 outline-0 shadow-sm text-sm"
                />
              </div>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
