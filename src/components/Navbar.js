import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
const Navbar = (props) => {

  // setTimeout(() => {
  //   props.history.push("/about");
  // }, 1000);


  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo right">
          Logo
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
