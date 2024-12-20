import React, { useState } from "react";
// import "./Navbar.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa"; // Import icons from react-icons

const Navbar = () => {
    const [activeTab, setActiveTab] = useState("");
    const [hoverTab, setHoverTab] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
        setHoverTab("Courses");
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
        setHoverTab("Courses");
    };

    return (
        <header className="HeaderSection">
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo">
                        <img src="./logo.png" alt="Codemeg Logo" className="logo" />
                    </div>
                    <div className="menu-icon" onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                    <div>
                        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
                            <li
                                className={`nav-item ${activeTab === "Home" || hoverTab === "Home" ? "active" : ""
                                    }`}
                                onClick={() => setActiveTab("Home")}
                                onMouseEnter={() => setHoverTab("Home")}
                                onMouseLeave={() => setHoverTab("")}
                            >
                                {/* <Link to="/" className="nav-link"> */}
                                Home
                                {/* </Link> */}
                            </li>
                            <li
                                className={`nav-item courses-item ${activeTab === "Courses" ? "active" : ""
                                    }`}
                                onClick={() => setActiveTab("Courses")}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="courses-container">
                                    {/* <Link to="/courses" className="nav-link"> */}
                                    Loans
                                    {/* </Link> */}
                                </div>
                            </li>
                            <li
                                className={`nav-item ${activeTab === "Blogs" || hoverTab === "Blogs" ? "active" : ""
                                    }`}
                                onClick={() => setActiveTab("Blogs")}
                                onMouseEnter={() => setHoverTab("Blogs")}
                                onMouseLeave={() => setHoverTab("")}
                            >
                                {/* <Link to="/blogs" className="nav-link"> */}
                                Blogs
                                {/* </Link> */}
                            </li>
                            <li
                                className={`nav-item ${activeTab === "About Us" || hoverTab === "About Us"
                                    ? "active"
                                    : ""
                                    }`}
                                onClick={() => setActiveTab("About Us")}
                                onMouseEnter={() => setHoverTab("About Us")}
                                onMouseLeave={() => setHoverTab("")}
                            >
                                {/* <Link to="#" className="nav-link"> */}
                                About Us
                                {/* </Link> */}
                            </li>
                            <li
                                className={`nav-item ${activeTab === "Contact" || hoverTab === "Contact"
                                    ? "active"
                                    : ""
                                    }`}
                                onClick={() => setActiveTab("Contact")}
                                onMouseEnter={() => setHoverTab("Contact")}
                                onMouseLeave={() => setHoverTab("")}
                            >
                                {/* <Link to="/contact" className="nav-link"> */}
                                Contact
                                {/* </Link> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
