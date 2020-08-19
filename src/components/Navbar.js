import React from "react"
import "../styles/Navbar.css"
import Welcome from "./submenu/Welcome"
import { Link } from "react-router-dom"
import Books from "./submenu/Books"
import Canon from "./submenu/Canon"
import Mishmash from "./submenu/Mishmash"

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
              <Link to="/">Welcome</Link>
              <Welcome />
            </li>
            <li className="item">
              <Link to="/ghanada-gallery/books">Books</Link>
              <Books />
            </li>
            <li className="item">
              <Link to="/ghanada-gallery/stories">Canon</Link>
              <Canon />
            </li>
            <li className="item">
              <Link to="/ghanada-gallery/mishmash">Mishmash</Link>
              <Mishmash />
            </li>
            <li className="item">
              <Link to="/ghanada-gallery/missing">Missing</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
