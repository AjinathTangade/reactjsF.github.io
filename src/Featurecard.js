import React from 'react';


const Featurecard = (props) => {
    return (
        <React.Fragment>
            <div className="col-md-4 col-10 mt-5">
                <div className="card">
                <h1><i className="fab fa-airbnb mx-2 text-danger"></i></h1>
                <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Featurecard;