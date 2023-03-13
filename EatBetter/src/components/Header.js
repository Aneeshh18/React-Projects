import { useState } from "react";
import logo from "../Images/logo.jpg"
import {Link} from 'react-router-dom'

const Title = () => (
    <a href="/">
        <img 
        className="logo"
        src={logo}
        alt="logo" />
    </a>
);

 const Header = () => {

    const [isLoggedin, setIsLoggedin] = useState(true);

    return (
        <div className="header">
            <Title />

            <div className="nav-items">
                <ul>
                    
                    <li>
                      <Link to= "/">Home</Link>
                    </li>
                    <li> 
                      <Link to="/about">About US</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>Cart</li>
                </ul>
            </div>

           {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedin(true)}>
                Login
              </button>
            )}
        </div>
    );
};

export default Header;