import React from 'react';
//import Featuresapi from './Featuresapi';
import Featurecard from './Featurecard';
import Apicard from './Apicard';

const Features = () => {
    return (
        <div>
            <div className="mx-auto text-center mt-5 pt-5">
                <h6 className="text-danger">FEATURES</h6>
                <hr className="w-25 mx-auto text-danger" />
                <h1>Your Experience Gets Better And Better Over Time.</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
            <div>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4 mt-2">
                                {
                                    Apicard.map((val, ind) => {
                                        return <Featurecard icons={val.icons} title={val.title} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Features;