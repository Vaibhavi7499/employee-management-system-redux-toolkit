import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Layout.css";

const Layout = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Employee Management System</a>
      
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Layout