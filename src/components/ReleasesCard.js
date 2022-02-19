import React from "react";

const Card = (props) => {
  return (
    <div className="flex container-lg">
      <div className="h-30 recordImage">
        <img alt="" src={props.image} className="fill"></img>
        <div>
          <h6 className="title text-black ml-3 mt-2">{props.name}</h6>
          <p className="text-4 pt-2">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
