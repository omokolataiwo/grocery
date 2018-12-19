import React from 'react';
import { Link } from 'react-router-dom';

export default ({}) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="d-flex flex-grow-1">
      <span className="w-100 d-lg-none d-block" />
      <div className="w-100 text-right">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
          <span className="navbar-toggler-icon" />
        </button>
      </div>
    </div>
    <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
      <ul className="navbar-nav ml-auto flex-nowrap">
        <li className="nav-item">
          <Link to="/" className="nav-link m-2 menu-item">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link m-2 menu-item">Store</Link>
        </li>
      </ul>
    </div>
  </nav>
);
