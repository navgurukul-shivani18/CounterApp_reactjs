import React, { Component } from "react";
//we can use life cycle hooks in class component not in functional component
// Stateless Functional Component
//Stateless component is just a plain javascript function which takes props as an argument and returns a react element.

const NavBar = ({ totalCounters }) => {
  console.log("NavBar-Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
