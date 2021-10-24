import React from 'react';
import web from "../src/img/A1.png";
const Contact = () => {
  return (
    <div>
      <div className="bg-info">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-8 col-10 mt-5">
                  <img src={web} alt="try agian" className="w-75 animated" />
                </div>
                <div className="col-md-4 mt-5">
                  <h2 className="text-white">Contact Us</h2>
                  <hr className="mb-5 w-25 text-danger" />

                  <form className="mx-auto">
                    <div className="mb-3">
                      <label for="exampleInputName" className="form-label text-white">First Name</label>
                      <input type="name" className="form-control" id="examplename" />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputName" className="form-label text-white">Last Name</label>
                      <input type="name" className="form-control" id="examplename" />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label text-white">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label text-white">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="input-group mb-4">
                      <textarea className="form-control" aria-label="With textarea">Messages</textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-danger btn-lg mb-5">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Contact;