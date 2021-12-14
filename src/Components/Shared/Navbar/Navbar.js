import React from 'react';
import { Link,NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand ms-5" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active ms-5">
              <NavLink className="nav-link text-white" to="/">Home <span class="sr-only">(current)</span></NavLink>
            </li>
           
            <li className="nav-item ms-5">
            <NavLink className="nav-link text-white" to="/about">About</NavLink>
          </li>

            <li className="nav-item ms-5">
            <NavLink className="nav-link text-white" to="/product">Product</NavLink>
          </li>
           
      
          <li class="nav-item ms-5">
              <NavLink className="nav-link text-white" to="/login">Login</NavLink>
            </li>
            <li className="nav-item ms-5">
              <NavLink className="nav-link text-white" to="/signUp">Registration</NavLink>
            </li>
           
           
          </ul>
          <form class="d-flex ms-5 me-5">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-success" type="submit">Search</button>
        </form>
        </div>
      </nav>
        </div>
    );
};

export default Navbar;