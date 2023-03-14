import {Outlet} from 'react-router-dom'


const About = () => {

    return(
        <div>
            <h1>About US</h1>
            <p>
                About us Buddy
            </p>
            <Outlet/>
        </div>
    );
};



export default About;