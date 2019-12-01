
// import react object and name as React
import React from "react";

// import the BrowserRouter, Route and Switch (destructured) from react-router-dom object
// rename BrowsRouter as Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import home page component 
import Home from "./pages/Home";

// import saved books page component 
import Saved from "./pages/Saved";

// import no book match found page component 
import NoMatch from "./pages/NoMatch";

// import the navigation bar component
import Nav from "./components/Nav";

// declare the App component
// it will return one thing - hence the braces after the return statement ()
function App() {
  return (
    // use Router component
    <Router>
      <div>
        {/* use Nav component */}
        <Nav />
        {/* Switch component will manage the evaluation of the Routes */}
        <Switch>
          {/* for / route pass Route component the Home page as prop */}
          <Route exact path="/" component={Home} />
          {/* for /saved route pass Route component the Saved page as prop*/}
          <Route exact path="/saved" component={Saved} />
          {/* for any other routes pass Route component the NoMatch page as prop */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

// export this file as App
export default App;
