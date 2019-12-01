// import react object as React
import React from "react";

// import css syle file
import "./style.css";

// define react functional component that recieves catch-all children prop
function Jumbotron({ children }) {
  // render components JSX classNames and children props for parent passed
  // html 
  return <div className="jumbotron mt-4">{children}</div>;
}

// export named as Jumbotron
export default Jumbotron;
