// import react object as React
import React from "react";

// import css style file
import "./style.css";

// This component exports both the List and ListItem components
// receives children as prop and passes them though to unorderd
// list tag  
export const List = ({ children }) => (
  <ul className="list-group">
    {children}
  </ul>
);

// creates list item tag for child prop
export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
