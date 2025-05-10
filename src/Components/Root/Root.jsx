import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useUser } from "@clerk/clerk-react";
import Loading from "../Shared/Loading";
import { Toaster } from "react-hot-toast";
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
    </div>
  );
};

export default Root;
