

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css'; // Importing the CSS file

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/?search=${searchTerm}`); // Redirect to home page with search query as URL param
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">News App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active hover-effect" aria-current="page" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active hover-effect" aria-current="page" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active hover-effect" aria-current="page" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active hover-effect" aria-current="page" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active hover-effect" aria-current="page" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active hover-effect" aria-current="page" to="/technology">Technology</Link>
              </li>
            </ul>
            {/* Search Form with Icon */}
            <form className="d-flex" onSubmit={handleSearchSubmit}>
              <input
                className="form-control me-2 search-input"
                type="search"
                placeholder="Search news..."
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                <i className="fas fa-search"></i> Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
