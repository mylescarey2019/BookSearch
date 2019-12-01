// import react object as React
import React from "react";

// define react functional component that recieves a series of props
// including catch-all children
function Card({ icon, title, children }) {
  return (
    // render components JSX classNames and various props
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
            {/* build className using template literal to combine 
                fixed portion with props thus allowing dynamic
                control of the class  */}
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

// export named as Card
export default Card;
