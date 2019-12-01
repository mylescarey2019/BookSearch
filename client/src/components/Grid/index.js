// import react object as React
import React from "react";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
// props include 'fluid' bootstrap class portion and 'children' to bring parent pass HTML
export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
  return (
    <div
    // class name is contructed by
    // taking the size prop string, splitting on space into an new array
    // then map over the array with function returning each element
    // concatenating "col-" to the element - this is supports a series
    // of bootstrap size classes
    // finally the array is joined back into a string that defines
    // the className value 
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {/* children prop brings in whatever html rendering was passed
          in from the parent component  */}
      {children}
    </div>
  );
}
