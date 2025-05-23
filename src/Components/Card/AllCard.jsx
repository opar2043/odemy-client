import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import CourseCard from "./courseCard";
import { FaArrowRight } from "react-icons/fa";
import Search from "../Shared/Search";
import useCourse from "../Hooks/useCourse";

const AllCard = () => {
  // const [course, setCourse] = useState([]);
  // useEffect(() => {
  //   fetch("/card.json")
  //     .then((data) => data.json())
  //     .then((res) => {
  //       setCourse(res);
  //     });
  // }, []);

    const [course] = useCourse([]);
    const [search , setSearch] = useState('');
    const [dbSearch, setDbSearch] = useState('');
  
    useEffect(()=>{
      const timer = setTimeout(()=>{
        setDbSearch(search)
      },500);
  
      return ()=> clearTimeout(timer);
    } , [search]);
  
  
    const filterCourse = course.filter(cor =>
       cor.title?.toLowerCase().includes(dbSearch.toLowerCase())
    );

  return (
    <div className="my-6 md:my-14 w-11/12 mx-auto">
      <div className=" flex flex-col md:flex-row gap-2 justify-between items-center ">
        <div className="flex flex-row justify-between w-full md:flex-col gap-2 mb-3">
          <h2 className="text-xl md:text-3xl font-semibold text-slate-950">Course List</h2>
          <div className="">
            <NavLink to={"/"} className="text-blue-500 font-semibold ">
                  Home
            </NavLink>{" "}
            <span className="text-slate-500">/ Course </span>
          </div>

        </div>

        {/* Search Div */}

        <div className="w-full">
         <Search value={search} onChange={setSearch} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-4 md:my-16">
        {filterCourse &&
          filterCourse.map((cor) => <CourseCard cor={cor}></CourseCard>)}
      </div>
    </div>
  );
};

export default AllCard;
