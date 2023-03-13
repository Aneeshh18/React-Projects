import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import About from "./About";
import Error from "./Error";
import Contact from "./Contact";
import RestuarantMenu from './RestaurantMenu'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';   


const AppLayout = () =>
{
    return(
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    );
};



const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error/>,
        children: [
            {
            path: "/",
            element: <Body />,
            },
            {
            path: "/About",
            element: <About />,
            },
            {
                path: "/Contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:resId",
                element: <RestuarantMenu/>,
            },
        ],
    },
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< RouterProvider router={appRouter} />);