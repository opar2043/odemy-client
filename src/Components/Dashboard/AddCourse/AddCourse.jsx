import React from 'react';
import { FaUpload } from 'react-icons/fa';

const AddCourse = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-xl shadow border">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Course</h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section */}
        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Course Title</label>
            <input
              type="text"
              placeholder="Type here"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Course Headings</label>
            <input
              type="text"
              placeholder="Type here"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Course Description</label>
            <textarea
              placeholder="Type here"
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Course Price</label>
            <input
              type="number"
              placeholder="0"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Right Section - Thumbnail */}
        <div className="flex flex-col justify-between">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Course Thumbnail</label>
            <label className="flex items-center justify-center gap-2 border-dashed border-2 border-gray-300 p-4 rounded cursor-pointer hover:border-blue-400 transition">
              <FaUpload className="text-blue-500" />
              <span className="text-sm text-gray-600">Click to upload</span>
              <input type="file" className="hidden" />
            </label>
            {/* Optional Thumbnail Preview Placeholder */}
            <img
              src="https://via.placeholder.com/150"
              alt="Preview"
              className="mt-4 w-32 rounded shadow"
            />
          </div>

          <button
            type="button"
            className="mt-8 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
