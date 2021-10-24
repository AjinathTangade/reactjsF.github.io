import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/img/A5.png"

const Homeabout = (props) => {
    return (
        <div>
            <section className=" d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                        <h1 className="text-center text-danger">{props.title}</h1>
                        <hr className="w-25 text-danger mx-auto" />
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    
                                <h1> {props.name}<strong className="brand_name"> Aj Style</strong></h1>
                                    <h2 className="my-3 text-muted">
                                        We are the team of talented devloper making websites
                                    </h2>
                                    <div className="mt-4">
                                        <NavLink to={props.visit}
                                            className="btn btn-outline-danger btn-lg">
                                            {props.btnname}
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 d-flex justify-content-center flex-column mt-5">
                                    <img src={props.imgsrc}
                                        className="img-fluid animated mt-3"
                                        alt="try agian" 
                                     />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Homeabout;