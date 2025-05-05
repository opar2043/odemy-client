import React from "react";
import { CiSearch } from "react-icons/ci";

const Banner = () => {
  return (
    <div>
      <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-screen max-w-screen-2xl px-6  py-8 md:pt-16 lg:py-28">
          <div className="mx-auto w-full md:max-w-4xl text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
              Empower your future with the courses designed to
              <strong className="text-indigo-600"> fit your choice </strong>
            </h1>

            <p className="my-6 mt-6 font-semibold  text-pretty text-gray-600 text-sm ">
              We bring together world-class instructors, interactive content,
              and a supportive community to help you achieve your personal and
              professional goals
            </p>

            <div className="my-6 mt-10 flex flex-row justify-between items-center gap-4 p-2 border rounded-xl shadow-md bg-white w-full md:w-2/3 mx-auto">
              <div className="w-full flex items-center pl-2 ">
                <CiSearch />
                <input
                  type="text"
                  id="text"
                  placeholder="Search for Course"
                  className="w-full rounded-lg  px-4 py-2 outline-0 shadow-sm text-sm"
                />
              </div>
              <button className="btn btn-primary"> Search </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
