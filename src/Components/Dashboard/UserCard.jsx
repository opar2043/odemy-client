import { useUser } from "@clerk/clerk-react";
import React from "react";
import useEmail from "../Hooks/useEmail";

const UserCard = () => {
  const { user } = useUser();
  const { fullName, imageUrl, createdAt, primaryEmailAddress } = user || "";

  console.log(user);

  const email = useEmail();
  return (
    <div className="w-full md:w-[60%] shadow-lg bg-white  border rounded">
      <div className="w-full h-[150px] rounded-t-md relative bg-[url('https://i.ibb.co.com/SD55xt4z/digital.webp')] bg-center">
        <img
          src={imageUrl}
          alt=""
          className="w-[80px] h-[80px] rounded-full border-secondary border-4 absolute -bottom-12 left-1/2 transform -translate-x-1/2 object-cover"
        />
      </div>

      <div className="w-full text-center mt-16">
        <h2 className="font-[600] text-[1.4rem]">{fullName}</h2>
        <p className="text-[#424242] text-[0.9rem]">{email}</p>
      </div>

      <div className="w-full p-4 mt-8 border-t border-border flex items-center justify-between">
        <div className="flex items-center justify-center flex-col">
          <p className="text-[#424242] text-[0.9rem]">
            {new Date(user?.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h2 className=" text-md font-[600]">Created At</h2>
        </div>
        <div className="flex items-center justify-center flex-col">
          <p className="text-[#424242] text-[0.9rem]">
            {new Date(user?.lastSignInAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h2 className="text-md font-[600]">Last Sign-In</h2>
        </div>

        <div className="flex items-center justify-center flex-col">
          <p className="text-[#424242] text-[0.9rem]">User</p>
          <h2 className=" text-md font-[600]">Role</h2>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
