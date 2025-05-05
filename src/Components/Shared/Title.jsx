import React from "react";

const Title = ({ head, para }) => {
  return (
    <div>
      <h2 className="text-slate-900 text-xl md:text-4xl text-center font-semibold my-6">
        {head}
      </h2>
      <p className="text-gray-600 md:w-7/12 mx-auto mb-10 font-semibold text-sm text-center">
        {para}
      </p>
    </div>
  );
};

export default Title;
