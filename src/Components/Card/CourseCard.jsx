import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { NavLink } from "react-router-dom";

const CourseCard = ({ cor }) => {
  const {
    title,
    instructor,
    rating,
    students,
    price,
    originalPrice,
    discount,
    duration,
    lessons,
    image,
    tagline,
    _id,
  } = cor;

  return (
    <NavLink to={`/view/${_id}`} >
      <div className="card card-compact bg-base-100 shadow-xl border-2">
        <figure>
          <img
            src={image}
            className="h-[140px] w-full bg-cover"
            alt="Shoes"
          />
        </figure>
        <div className="p-3 mt-2 pb-5 flex flex-col gap-1">
          <h2 className="card-title">{title}</h2>
          <p className="text-gray-600 text-sm font-normal">{instructor}</p>
          <div className="flex items-center gap-2">
            <Rating style={{ maxWidth: 100 }} value={rating} />
            <p className="font-semibold text-gray-600 text-sm">({rating})</p>
          </div>
          <p className="font-bold text-lg text-slate-900">{price} $</p>
        </div>
      </div>
    </NavLink>
  );
};

export default CourseCard;
