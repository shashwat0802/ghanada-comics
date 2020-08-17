import React from "react"
import { Link } from "react-router-dom"

const Welcome = () => {
  return (
    <ul className="welcome-submenu">
      <li className="submenu-item">
        <Link to href="#">
          Intro
        </Link>
      </li>
      <li className="submenu-item">
        <Link to href="#">
          Why
        </Link>
      </li>
      <li className="submenu-item">
        <Link to href="#">
          How
        </Link>
      </li>
      <li className="submenu-item">
        <Link to href="#">
          Author
        </Link>
      </li>
      <li className="submenu-item">
        <Link to href="#">
          Artists
        </Link>
      </li>
      <li className="submenu-item">
        <Link to href="#">
          Hero
        </Link>
      </li>
      <li className="submenu-item">
        <Link to href="#">
          Thanks
        </Link>
      </li>
    </ul>
  )
}

export default Welcome
