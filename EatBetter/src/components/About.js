import { useState } from "react";
import food from "../Images/images.jpeg";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="flex flex-wrap flex-col m-10 text-center font-extrabold text-4xl height font-serif">
        <div>
          <h1>
            Welcome to The world of{" "}
            <span className="text-orange-500">Tasty & Fresh </span> Food.
          </h1>
          "Eat Better Live Better"
        </div>
        <div className=" max-w-screen-lg mx-auto pt-10 flex justify-center">
          <img src={food} alt="Food Image" />
        </div>

        <div className="text-center">
          {show ? (
            <>
              <Link to={"/about"}>
                <button
                  className="py-2 px-2 m-5 rounded-tr-lg cursor-pointer  bg-orange-500 text-zinc-100 "
                  onClick={() => setShow(false)}
                >
                  Hide My Profile
                </button>
              </Link>
              <Outlet />
            </>
          ) : (
            <Link to={"profile"}>
              <button
                className="py-2 px-2 m-5 rounded-tr-lg cursor-pointer  bg-orange-500 text-zinc-100 "
                onClick={() => setShow(true)}
              >
                Show My Profile
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;

// <div className="text-center">
//     <p className="font-medium text-xl w-full text-center py-2"> About Me </p>
//     <img src={avatar} alt="user img" />
// </div>
