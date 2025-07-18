import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Root/Home.jsx";
import Card from "./Components/Card/Card.jsx";
import AllCard from "./Components/Card/AllCard.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import AddCourse from "./Components/Dashboard/AddCourse/AddCourse.jsx";
import Enroll from "./Components/Dashboard/Enroll/Enroll.jsx";
import MyCourse from "./Components/Dashboard/MyCourse/MyCourse.jsx";
import DashMain from "./Components/Dashboard/DashMain.jsx";
import { ClerkProvider, SignIn, SignUp } from "@clerk/clerk-react";
import View from "./Components/Card/View.jsx";
import Learn from "./Components/review/Learn.jsx";
import Chatbot from "./Components/Chatbot/Chatbot.jsx";
import Error from "./Components/Shared/Error.jsx";
import Login from "./Components/Firebase/Login.jsx";
import Register from "./Components/Firebase/register.jsx";
import AuthProvider from "./Components/Firebase/Authprovider.jsx";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allcard",
        element: <AllCard></AllCard>,
      },
      {
        path: "/view/:id",
        element: <View></View>
      },
      // {
      //   path: "/login",
      //   element: <div className="flex justify-center p-4"><SignIn></SignIn></div>
      // },
      // {
      //   path: "/register",
      //   element: <SignUp ></SignUp>
      // },
      {
        path: "/learn",
        element: <Learn></Learn>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <DashMain></DashMain>,
      },
      {
        path: "/dashboard/add",
        element: <AddCourse></AddCourse>,
      },
      {
        path: "/dashboard/enroll",
        element: <Enroll></Enroll>,
      },
      {
        path: "/dashboard/mycourse",
        element: <MyCourse></MyCourse>,
      },
    ],
  },
  {
    path: '/chatbot',
    element: <Chatbot></Chatbot>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router}></RouterProvider>
    </ClerkProvider>
    </AuthProvider>

  </StrictMode>
);
