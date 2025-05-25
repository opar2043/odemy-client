import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useUser } from "@clerk/clerk-react";
import Loading from "../Shared/Loading";
import { Toaster } from "react-hot-toast";
import { GoCopilot } from "react-icons/go";
const Root = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div>
       <Toaster position="top-center" reverseOrder={false} />
      {!isLoaded ? (
        <p>
          <Loading></Loading>
        </p>
      ) : (
        <div>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      )}

<div className="fixed bottom-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-violet-700 text-white shadow-lg flex items-center justify-center hover:from-violet-600 hover:to-violet-800 transition duration-300">
  <button className="focus:outline-none text-xl">
    <GoCopilot />
  </button>
</div>


    </div>
  );
};

export default Root;
