// this is the application main page index javascript file
// it renders the App component in the application main HTML page at the root div

// import the React object and name React
import React from "react";

// import the react-dom object and name ReactDom
import ReactDOM from "react-dom";

// import the App component from the /App file
import App from "./App";

// import the service worker - a background programmable proxy to manage
// requests and allow app to work offline
import registerServiceWorker from "./registerServiceWorker";

// run the render method to surface the App component in the HTML root div
ReactDOM.render(<App />, document.getElementById("root"));

// intialize/start the service worker
registerServiceWorker();
