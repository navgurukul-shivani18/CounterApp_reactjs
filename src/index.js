import React from "react"; // importing React from react library
import ReactDOM from "react-dom"; //importing ReactDOM from the reactDom library
import "./index.css"; //import index.css
import App from "./App"; //our root component is an App Component
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css"; //import bootstrap
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
