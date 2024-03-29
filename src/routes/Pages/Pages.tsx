import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Loading from "@/components/Loading";
import AppErrorBoundaryFallback from "@/error-handling/App";
import Calculator from "@/pages/Calculator";
import Compare from "@/pages/Compare";
import Data from "@/pages/Data";
import Home from "@/pages/Home";
import Skins from "@/pages/Skins";
import SquadronVehicles from "@/pages/Squadron";
import TreeTech from "@/pages/Techtree";
import Vehicle from "@/pages/Vehicle";
import Header from "@/sections/Drawer/Header";
import HotKeys from "@/sections/HotKeys";
import Sidebar from "@/sections/Sidebar";

const router = createBrowserRouter([
  {
    path: "/wt/",
    element: (
      <>
        <Header />
        <Sidebar />
        <HotKeys />
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
            element: (
              <Suspense fallback={<Loading />}>
                <TreeTech />
              </Suspense>
            ),
          },
          {
            path: "/wt/squadron/",
            element: <SquadronVehicles />,
          },
          {
            path: "/wt/compare/",
            element: <Compare />,
          },
          {
            path: "/wt/data/",
            element: <Data />,
          },
          {
            path: "/wt/techtree/:vehicleId",
            element: (
              <Suspense fallback={<Loading />}>
                <Vehicle />
              </Suspense>
            ),
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
