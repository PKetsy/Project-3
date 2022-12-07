import React from "react";

import "./MainHeader.css";

const MainHeader = (props) => {
  return <header className="main-header">{props.children}</header>;

  //props children always refers to things passed through opening and closing tags of our components */
  //see MainNavigation file for example
};

export default MainHeader;
