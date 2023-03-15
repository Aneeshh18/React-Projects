import { useState } from "react";
import food from "../Images/images.jpeg"
import { Link, Outlet } from 'react-router-dom';


const About = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <div className="about-profile-container">
                {show ? (
                    <>
                        <Link to={"/about"}>
                            <button className="about-profile-btn"
                                onClick={() => setShow(false)}>
                                Hide My Profile
                            </button>
                        </Link>
                        <Outlet />
                    </>
                ) : (
                    <Link to={"profile"}>
                        <button className="about-profile-btn"
                            onClick={() => setShow(true)}>
                            Show My Profile
                        </button>
                    </Link>
                )}
            </div>
            <div className="about-container">
                <div className="about-left">
                    <h1>
                        Welcome to The world of {" "}
                        <span>Tasty & Fresh Food</span>
                    </h1>
                    <h4>
                        "Eat Better Live Better"
                    </h4>
                </div>
                <div className="about-right">
                    <img src={food} alt="Food Image" />
                </div>
            </div>
        </div>
    );
};


export default About;