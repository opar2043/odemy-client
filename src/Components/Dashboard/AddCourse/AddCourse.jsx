import React, { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";
import { useUser } from "@clerk/clerk-react";
import Swal from "sweetalert2";

const img_hosting = import.meta.env.VITE_IMG;
const img_api_key = `https://api.imgbb.com/1/upload?key=${img_hosting}`;
const AddCourse = () => {
  const { user } = useUser();
  const email = user?.primaryEmailAddress?.emailAddress;
  const [rating, setRating] = useState(5);
  const axiosSecure = useAxios();

  function handleSubmit(e) {
    e.preventDefault();
    const frm = e.target;

    const title = frm.title.value;
    const description = frm.description.value;
    const discount = frm.discount.value;
    const benefit = frm.benefit.value;
    const price = frm.price.value;
    const originalPrice = frm.originalPrice.value;
    const image = frm.image.files[0];

    const data = new FormData();
    data.append("image", image);

    fetch(img_api_key, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Upload success:", data);

        const courseObj = {
          title,
          description,
          discount,
          price,
          originalPrice,
          benefit,
          rating,
          email,
          image: data.data.url,
        };

        console.log(courseObj);
        axiosSecure
          .post("/course", courseObj)
          .then((res) => {
            Swal.fire({
              title: "Added Course",
              icon: "success",
              draggable: true,
            });
          })
          .catch((err) => {
            console.error(err);
            Swal.fire({
              title: "Eroor",
              icon: "error",
              draggable: true,
            });
          });
      });


      frm.reset()
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-xl shadow border">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Course</h2>

      {/* =================================== */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Left Section */}
        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Course Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Type here"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Course Headings
            </label>
            <input
              type="text"
              name="tagline"
              placeholder="Type here"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Course Description
            </label>
            <textarea
              name="description"
              placeholder="Type here"
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Course Price
            </label>
            <input
              type="number"
              name="price"
              placeholder="0"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Oginal Price
            </label>
            <input
              type="number"
              name="originalPrice"
              placeholder="0"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Right Section - Thumbnail */}
        <div className="flex flex-col justify-between">
          <div>
            <label className="block  text-sm font-medium text-gray-700">
              Discount
            </label>
            <input
              type="number"
              name="discount"
              placeholder="discount"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block  text-sm font-medium text-gray-700">
              Benefits
            </label>
            <input
              type="text"
              name="benefit"
              placeholder="Whats in this Course"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Rating
            </label>
            <select
              onChange={(e) => setRating(e.target.value)}
              name="rating"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" className="text-xs text-gray-500">
                Select rating
              </option>
              <option value="1">1 ★</option>
              <option value="2">2 ★★</option>
              <option value="3">3 ★★★</option>
              <option value="4">4 ★★★★</option>
              <option value="5">5 ★★★★★</option>
            </select>
          </div>
          <div>
            <div>
              <label className="block  text-sm font-medium text-gray-700">
                Image
              </label>
              <input
                type="file"
                name="image"
                className="w-full file:bg-gray-100 file:text-gray-700 file:border file:border-blue-300 file:rounded-md file:px-4 file:py-2 file:focus:outline-none file:focus:ring-2 file:focus:ring-gray-500 transition-all mt-3"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            ADD Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
