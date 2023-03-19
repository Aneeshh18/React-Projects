import React, {
  lazy,
  Suspense,
  useState,
  useMemo,
  useRef,
  useEffect,
} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import About from "./About";
import Error from "./Error";
import Help from "./Help";
import RestuarantMenu from "./RestaurantMenu";
import Profile from "./Profile";
import Cart from "./Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";



const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
        children: [
          {
            //Nested Routing
            path: "Profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "Help",
        element: <Help/>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestuarantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
