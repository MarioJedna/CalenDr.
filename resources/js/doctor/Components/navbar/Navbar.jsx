import React, { useContext, useEffect, useState } from "react";
import Homenavbar from "./Homenavbar";
import Doctornavbar from "./Doctornavbar";
import Patientnavbar from "./Patientnavbar";
import Managernavbar from "./Managernavbar";
import UserContext from "../UserContext/UserContext";

export default function Navbar() {
    const { user } = useContext(UserContext);
    const [navbar, setNavbar] = useState(<Homenavbar />);

    useEffect(() => {
        if (user) {
            switch (user.role) {
                case "doctor":
                    setNavbar(<Doctornavbar />);
                    break;
                case "patient":
                    setNavbar(<Patientnavbar />);
                    break;
                case "manager":
                    setNavbar(<Managernavbar />);
                    break;
                default:
                    setNavbar(<Homenavbar />);
                    break;
            }
        } else {
            setNavbar(<Homenavbar />);
        }
    }, [user]);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
                <a className="navbar-brand" href="#">
                    CalenDr
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavDropdown"
                >
                    <ul className="navbar-nav">{navbar}</ul>
                </div>
            </nav>
        </>
    );
}
