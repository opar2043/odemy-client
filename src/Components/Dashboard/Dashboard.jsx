import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaTachometerAlt, FaPlusCircle, FaBookOpen, FaUsers, FaHome } from 'react-icons/fa';
import DashFooter from '../Root/DashFooter';

const Dashboard = () => {
  return (
    <div className="">
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 ">
      {/* Sidebar */}
      <aside className="md:w-64 w-full md:h-screen bg-white border-r border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-8">
        <img src="/Odemy.png" className='w-9 h-9 rounded-full' />
        <h2 className="text-2xl font-bold text-blue-700 ">Odemy</h2>
        </div>
        <nav className="flex flex-col gap-5">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
          >
            <FaTachometerAlt className="text-lg" />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/dashboard/add"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
          >
            <FaPlusCircle className="text-lg" />
            <span>Add Course</span>
          </Link>
          <Link
            to="/dashboard/mycourse"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
          >
            <FaBookOpen className="text-lg" />
            <span>My Courses</span>
          </Link>
          <Link
            to="/dashboard/enroll"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
          >
            <FaUsers className="text-lg" />
            <span>Student Enrolled</span>
          </Link>
          <Link to={'/'} className="btn text-left bg-color w-full text-white">
            <FaHome></FaHome> Back To Home
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8"><Outlet></Outlet></main>
    </div>
    <DashFooter></DashFooter>
    </div>
  );
};

export default Dashboard;

