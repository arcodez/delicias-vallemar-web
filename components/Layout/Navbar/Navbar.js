import React from "react"
import styles from "./estilos.css"
import { empresa } from "../../miconfig"
import { Link } from "gatsby"

function Navbar() {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="buttons">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <strong>{`${empresa.nombre}`}</strong>
            </Link>
          </div>

          <Link
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item">Home</Link>

            <Link className="navbar-item">Documentation</Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-link">More</Link>

              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/about/">
                  About
                </Link>
                <Link className="navbar-item">Jobs</Link>
                <Link className="navbar-item">Contact</Link>
                <hr className="navbar-divider" />
                <Link className="navbar-item">Report an issue</Link>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link className="button is-primary">
                  <strong>Sign up</strong>
                </Link>
                <Link className="button is-light">Log in</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
