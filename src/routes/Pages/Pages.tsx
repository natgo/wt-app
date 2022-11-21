import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppErrorBoundaryFallback from "@/error-handling/App";
import Calculator from "@/pages/Calculator";
import Data from "@/pages/Data";
import Home from "@/pages/Home";
import Skins from "@/pages/Skins";
import TreeTech from "@/pages/Techtree";
import Vehicle from "@/pages/Vehicle";
import Header from "@/sections/Drawer/Header";
import Sidebar from "@/sections/Sidebar";

const router = createBrowserRouter([
  {
    path: "/wt/",
    element: (
      <>
        <Header />
        <Sidebar />
      </>
    ),
    errorElement: <AppErrorBoundaryFallback />,

    children: [
      {
        errorElement: <AppErrorBoundaryFallback />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/wt/techtree/",
            element: <TreeTech />,
          },
          {
            path: "/wt/data/",
            element: <Data />,
          },
          {
            path: "/wt/techtree/:vehicleId",
            element: <Vehicle />,
          },
          {
            path: "/wt/calculator/",
            element: <Calculator />,
          },
          {
            path: "/wt/skins/",
            element: <Skins />,
          },
        ],
      },
    ],
  },
]);

function Pages() {
  return <RouterProvider router={router} />;
}

export default Pages;
