import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div>
      <div className=" flex flex-row justify-between items-center gap-4 p-2 border rounded-xl shadow-md bg-white w-full md:w-2/3 mx-auto">
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
  );
};

export default Search;
