// import react object as React and destructures Component object from react 
// object
import React, { Component } from "react";

// destructures Link compnent from react-router-dom
import { Link } from "react-router-dom";

// import css styel file
import "./style.css";

// define react class component for Navigation component
class Nav extends Component {
  // define state variables: open and width (initializing to 
  // windows object innerWidth property)
  state = {
    open: false,
    width: window.innerWidth
  };

  // method to update the Nav component width
  updateWidth = () => {
    // capture what new state will be from window object
    const newState = { width: window.innerWidth };

    // check to see if Nav is open and new state is wider than 991
    // in which case the Nav state is updated to closed
    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    // state for width and open is updated
    this.setState(newState);
  };

  // method to toggle the Nav open / closed
  // set open state to the opposite of what is currently is
  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  // life cycle method - when Nav component has loaded
  // add a windows object event listener for event resize
  // having it call method updateWidth
  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  // life cycle method - when Nav closes remove the event listener
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  // call react render method to render the component
  render() {
    return (
      // render components JSX classNames and various props
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <Link className="navbar-brand" to="/">
          Google Books
        </Link>
        <button
          // button onClick event is bound to method toggleNav
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* manage the div class as collapsed or not based on the state.open value */}
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                //  onClick is bound to the toggle nav method
                onClick={this.toggleNav}
                // define className value active is this is home page 
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
                // onClick is bound to the toggle nav method
                onClick={this.toggleNav}
                // define className value as active is this is the /saved page
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                to="/saved"
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

// export named as Nav
export default Nav;
