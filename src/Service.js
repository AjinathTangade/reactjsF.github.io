import React from 'react';
//import web from "../src/img/A1.jpg";
import Apicard from './Apicard';
import Card from './Card';



const Service = () => {
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center text-danger">Our Services</h1>
        <hr className=" w-25 text-danger mx-auto" />
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {
                Apicard.map((val, ind) => {
                  return <Card imgsrc={val.imgsrc} title={val.title} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;