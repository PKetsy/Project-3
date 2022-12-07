import React, { useRef, useEffect } from "react";
//useRef is used to create 'references'.  Used for reference/pointer for DOM node
//  or used to create variables that survive re-render cycles of values and don't lose values

//useEffect registers logic, a function, that should be executed when certain inputs change.

import "./Map.css";

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;
  //object destructuring ^^

  // useEffect(() => {function], [dependencies]})
  //whenever dependencies change ([]), the function{} will be re-executed

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
