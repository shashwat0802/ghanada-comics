import React from "react"
import "../styles/Navbar.css"
import Welcome from "./submenu/Welcome"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="container">
        <div className="navbar-brand">
          <h1>Ghanada Gallary</h1>
        </div>
        <div className="items-wrapper">
          <ul>
            <li className="item">
              <Link to="#">Welcome</Link>
              <Welcome />
            </li>
            <li className="item">
              <Link to="#">Books</Link>
            </li>
            <li className="item">
              <Link to="#">Canon</Link>
            </li>
            <li className="item">
              <Link to="#">Mishmash</Link>
            </li>
            <li className="item">
              <Link to="#">Missing</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
