import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg position-fixed top-0 start-0 end-0 z-3">
      <div className="container py-3">
        <Link className="navbar-brand text-white fw-bolder fs-3" to={'home'}>
          START FRAMEWORK
        </Link>
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="n{}avbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to={'about'}>
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to={'portfolio'}>
                PORTFOLIO
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to={'contact'}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
