import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";
import { useUser } from "@clerk/clerk-react";

const img_hosting = import.meta.env.VITE_IMG;
const img_api_key = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting}`;
const AddCourse = () => {
  const {user} = useUser();
  const email = user?.primaryEmailAddress?.emailAddress;

  const [rating, setRating] = useState(5);
  const axiosSecure = useAxios()
  function handleSubmit(e) {
    e.preventDefault();
    const frm = e.target;


    const title = frm.title.value;
    const description = frm.description.value;
    const discount = frm.discount.value;
    const benefit = frm.benefit.value;
    const price = frm.price.value;
    const originalPrice = frm.originalPrice.value;

    const courseObj = {
      title,
      description,
      discount,
      price,
      originalPrice,
      benefit,
      rating,
      email
    };

    console.log(courseObj);
    axiosSecure.post('/course', courseObj)
    .then(res => {
      console.log(res.data);
      toast.success('Course Added');
    })
    .catch(err => {
      console.error(err);
      toast.error('Failed to add course');
    });
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-xl shadow border">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Course</h2>

      {/* =================================== */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Course Thumbnail
            </label>
            <label className="flex items-center justify-center gap-2 border-dashed border-2 border-gray-300 p-4 rounded cursor-pointer hover:border-blue-400 transition">
              <FaUpload className="text-blue-500" />
              <span className="text-sm text-gray-600">Click to upload</span>
              <input type="file" name="image" className="hidden" />
            </label>
            <img
              src="https://via.placeholder.com/150"
              alt="Preview"
              className="mt-4 w-32 rounded shadow"
            />
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



// import React, { useState } from "react";
// import { FaUpload } from "react-icons/fa";
// import useAxios from "../../Hooks/useAxios";

// const img_hosting = import.meta.env.VITE_IMG;
// const img_api_key = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting}`;
// const AddCourse = () => {
//   const [rating, setRating] = useState(5);
//   const axiosSecure = useAxios();

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const frm = e.target;
  
//     const imageFile = frm.image.files[0]; // Get the image file from the form
  
//     // Create a FormData object to send the image as multipart/form-data
//     const formData = new FormData();
//     formData.append('image', imageFile);
  
//     // Send the image to the server for uploading
//     const res = await axiosSecure.post(img_api_key, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
  
//     // Handle the response
//     if (res.data.success) {
//       // The image has been successfully uploaded
//       const imgUrl = res.data.data.url; // Assuming the image URL is in res.data.data.url
  
//       // You can now use the imgUrl for your course data
//       const courseData = {
//         title: frm.title.value,
//         description: frm.description.value,
//         discount: frm.discount.value,
//         price: frm.price.value,
//         originalPrice: frm.originalPrice.value,
//         benefit: frm.benefit.value,
//         rating,
//         imageUrl: imgUrl, // Add the uploaded image URL
//       };
  
//       // Now you can send courseData to your database or wherever you need
//       console.log(courseData);
//     }
//   }
  
//   return (
//     <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-xl shadow border">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Course</h2>

//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="space-y-4">
//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">Course Title</label>
//             <input type="text" name="title" placeholder="Type here" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
//           </div>

//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">Course Headings</label>
//             <input type="text" name="tagline" placeholder="Type here" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
//           </div>

//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">Course Description</label>
//             <textarea name="description" placeholder="Type here" rows="4" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
//           </div>

//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">Course Price</label>
//             <input type="number" name="price" placeholder="0" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
//           </div>
//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">Original Price</label>
//             <input type="number" name="originalPrice" placeholder="0" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
//           </div>
//         </div>

//         <div className="flex flex-col justify-between">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Discount</label>
//             <input type="number" name="discount" placeholder="discount" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Benefits</label>
//             <input type="text" name="benefit" placeholder="What's in this Course" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-600">Rating</label>
//             <select onChange={(e) => setRating(e.target.value)} name="rating" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
//               <option value="" className="text-xs text-gray-500">Select rating</option>
//               <option value="1">1 ★</option>
//               <option value="2">2 ★★</option>
//               <option value="3">3 ★★★</option>
//               <option value="4">4 ★★★★</option>
//               <option value="5">5 ★★★★★</option>
//             </select>
//           </div>

//           <div>
//             <input type="file" name="image" className="file-input w-full max-w-xs" />
//           </div>

//           <button type="submit" className="mt-8 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">ADD Course</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddCourse;





























