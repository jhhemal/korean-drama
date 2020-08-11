import React from "react";

const Card = (props) => {
    return(
        <>
            <div className="card my-3" style={{ width: "15rem" }}>
                <img className="mt-2" src={props.imgSrc} alt="" height="190px"/>
                <h6 className="card-title mt-3">{props.title}</h6>
                <div className="card-body">
                <p className="text-center">Episode: {props.epi}</p>
                <p className="text-center">
                <a href={props.link} className="btn btn-sm btn-outline-primary">Watch now</a>
                </p>
                
                </div>
            </div>
        </>
    );
};

export default Card;

//require("./stay.jpg")