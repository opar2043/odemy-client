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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allcard",
        element: <AllCard></AllCard>
      }
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
      path: '/dashboard',
      element: <DashMain></DashMain>
     },
      {
      path: '/dashboard/add',
      element: <AddCourse></AddCourse>
     },
      {
      path: '/dashboard/enroll',
      element: <Enroll></Enroll>
     },
      {
      path: '/dashboard/mycourse',
      element: <MyCourse></MyCourse>
     },
  ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
