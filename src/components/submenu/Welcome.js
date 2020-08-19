import React from "react"
import { Link } from "react-router-dom"

const Welcome = () => {
  return (
    <ul className="welcome-submenu">
      <li className="submenu-item">
        <Link to="/ghanada-gallery/intro">Intro</Link>
      </li>
      <li className="submenu-item">
        <Link to="/ghanada-gallery/why">Why</Link>
      </li>
      <li className="submenu-item">
        <Link to="/ghanada-gallery/how">How</Link>
      </li>
      <li className="submenu-item">
        <Link to="/ghanada-gallery/author">Author</Link>
      </li>
      <li className="submenu-item">
        <Link to="/ghanada-gallery/artists">Artists</Link>
      </li>
      <li className="submenu-item">
        <Link to="/ghanada-gallery/hero">Hero</Link>
      </li>
      <li className="submenu-item">
        <Link to="/ghanada-gallery/thanks">Thanks</Link>
      </li>
    </ul>
  )
}

export default Welcome
