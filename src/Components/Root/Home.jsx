import React from "react";
import Banner from "./Banner";
import Learner from "../Learner/Learner";
import Card from "../Card/Card";
import Review from "../review/Review";
import { useUser } from "@clerk/clerk-react";
import Loading from "../Shared/Loading";

const Home = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div className="w-11/12  mx-auto">
      <Banner></Banner>
      <Learner></Learner>
      <Card></Card>
      <Review></Review>
    </div>
  );
};

export default Home;
