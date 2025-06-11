import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Search from "../Shared/Search";
import useCourse from "../Hooks/useCourse";

const Banner = () => {
  const [course] = useCourse([]);
  const [search, setSearch] = useState("");
  const [dbSearch, setDbSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDbSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const filterCourse = course.filter((cor) =>
    cor.title?.toLowerCase().includes(dbSearch.toLowerCase())
  );
  
  return (
    <div>
      <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-screen max-w-screen-2xl px-6  py-8 md:pt-16 lg:py-28">
          <div className="mx-auto w-full md:max-w-4xl text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
              Empower your future with the courses designed to
              <strong className="text-color"> fit your choice </strong>
            </h1>

            <p className="my-6 mt-6 font-semibold  text-pretty text-gray-600 text-sm ">
              We bring together world-class instructors, interactive content,
              and a supportive community to help you achieve your personal and
              professional goals to achive it.
            </p>

            <div className="mt-11">
              <Search value={search} onChange={setSearch} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
