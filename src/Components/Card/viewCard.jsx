
// import React from "react";

// // react icons
// import {IoBookmarkOutline} from "react-icons/io5";
// import {GoShareAndroid} from "react-icons/go";

// const ViewCard = ({myCourse}) => {
//     console.log(myCourse);

// const {
//         title,
//           description,
//           discount,
//           price,
//           originalPrice,
//           benefit,
//           rating,
//           email,
//           image} = myCourse || '';


//     return (
//         <div className="bg-white rounded-md boxShadow w-full md:w-3/5 mx-auto">
//             <img
//                 src={image || ''} 
//                 alt="image"
//                 className="w-full h-[250px] object-cover rounded-t-md"
//             />

//             <div className="p-4 relative">

//                 <div
//                     className="rounded-xl w-[70px] py-3 bg-white absolute -top-9 right-6 boxShadow flex items-center flex-col justify-center">
//                     <b className="text-[1.4rem] leading-[1.4rem]">18</b>
//                     <span className="text-[1rem]">JAN</span>
//                 </div>

//                 <p className="text-[1rem] text-gray-300 mt-6">Performance</p>
//                 <h1 className="text-[22px] font-bold text-black leading-[28px] mt-1.5">Hip hop
//                     dancer in
//                     dance</h1>

//                 <div className="mt-5 flex items-center gap-[10px]">
//                         <span
//                             className="w-[40px] cursor-pointer h-[40px] rounded-full border border-[#959393] flex items-center justify-center">
//                         <IoBookmarkOutline className="text-[#959393]"/>
//                         </span>
//                     <span
//                         className="w-[40px] cursor-pointer h-[40px] rounded-full border border-[#959393] flex items-center justify-center">
//                         <GoShareAndroid className="text-[#959393]"/>
//                         </span>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ViewCard;
                    










import React from "react";
import { IoBookmarkOutline } from "react-icons/io5";
import { GoShareAndroid } from "react-icons/go";
import { FaStar } from "react-icons/fa";

const ViewCard = ({ myCourse }) => {
  const {
    title,
    description,
    discount,
    price,
    originalPrice,
    benefit,
    rating,
    email,
    image,
  } = myCourse || {};

  return (
    <div className="bg-white rounded-2xl shadow-lg w-full md:w-3/5 mx-auto overflow-hidden transition hover:shadow-xl">
      <div className="relative">
        <img
          src={image || "https://via.placeholder.com/600x400"}
          alt={title}
          className="w-full h-[250px] object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-xl shadow-md text-center">
          <p className="text-lg font-bold text-blue-600">18</p>
          <p className="text-xs text-gray-500">JAN</p>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <p className="text-sm text-blue-500 font-semibold uppercase">Performance</p>
        <h2 className="text-xl font-bold text-gray-800 leading-tight">{title}</h2>

        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>

        <div className="flex items-center gap-2">
          <div className="flex items-center text-yellow-500 text-sm">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"} />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-1">({rating}/5)</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-blue-600">${price}</span>
          {originalPrice && (
            <span className="text-sm line-through text-gray-400">${originalPrice}</span>
          )}
          {discount && (
            <span className="text-sm text-green-600 font-semibold bg-green-100 px-2 py-1 rounded">
              {discount}% OFF
            </span>
          )}
        </div>

        <ul className="text-sm text-gray-600 list-disc pl-5">
          {benefit?.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <div className="flex justify-between items-center mt-4">
          <div className="text-xs text-gray-400">By: {email}</div>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
              <IoBookmarkOutline className="text-gray-500" />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
              <GoShareAndroid className="text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCard;
