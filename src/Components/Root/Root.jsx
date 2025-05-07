import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useUser } from "@clerk/clerk-react";
import Loading from "../Shared/Loading";
const Root = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div>
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
