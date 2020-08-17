import React from "react"
import { Link } from "react-router-dom"
const Mishmash = () => {
  return (
    <ul className="mishmash-submenu">
      <li className="submenu-item">
        <Link to href="#">
          Interviews
        </Link>
      </li>
      <li className="submenu-item">
        <Link to href="#">
          Interview in 'span' July 1974
        </Link>
      </li>
      <li className="submenu-item">
        <Link to href="#">
          Translations
        </Link>
      </li>
      <li className="submenu-item">
        <Link to href="#">
          Ghanada Club
        </Link>
      </li>
      <li className="submenu-item">
        <Link to href="#">
          Advertisements
        </Link>
      </li>
      <li className="submenu-item">
        <Link to href="#">
          Audio Drama
        </Link>
      </li>
      <li className="submenu-item">
        <Link to href="#">
          Special Issues
        </Link>
      </li>
      <li className="submenu-item">
        <Link to href="#">
          Comics
        </Link>
      </li>
      <li className="submenu-item">
        <Link to href="#">
          Artist's Gallery
        </Link>
      </li>
    </ul>
  )
}

export default Mishmash
