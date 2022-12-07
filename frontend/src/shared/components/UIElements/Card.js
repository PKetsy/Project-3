import React from "react";

import "./Card.css";

//card is a component that is able to accept a class name of prop, and merge it with its own classes in userItem.js

const Card = (props) => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
