import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (

        <div>
            <div className="main_navbar">
                <div Name="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto py-3">

                            <nav className="navbar navbar-expand-lg navbar-light ">
                                <div className="container-fluid">
                                    <NavLink className="navbar-brand" to="/">Aj Style</NavLink>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <NavLink exact activeClassName="menu_active" className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/service">Service</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/about">About Us</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink exact activeClassName="menu_active" className="nav-link" to="/contact">Contct us</NavLink>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;