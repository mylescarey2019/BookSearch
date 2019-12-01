// import react object as React
import React from "react";

// define react functional component that recieves a series of props
// including handler functions
function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
      // render components JSX classNames and various props
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Ready Player One"
          name="q"
          // on change attribute of input tag is
          // assigned the handleInputChange prop which is a 
          // function
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          // on change attribute of button tag is
          // assigned the handleFormSubmit prop which is a 
          // function
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

// export named as Form
export default Form;
