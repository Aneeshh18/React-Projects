const Title = () => (
    <a href="/">
        <img 
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiRJuKYDmb0tjHCR1c_VNk5Osi_z9Q22q3Fw&usqp=CAU" 
        alt="logo" />
    </a>
);

 const Header = () => {
    return (
        <div className="header">
            <Title />

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;