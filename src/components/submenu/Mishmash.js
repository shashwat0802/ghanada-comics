import React from "react"
import { Link } from "react-router-dom"
const Mishmash = () => {
  return (
    <ul className="mishmash-submenu">
      <li className="submenu-item">
        <Link to="#">Interviews</Link>
      </li>
      <li className="submenu-item">
        <Link to="#">Interview in 'span' July 1974</Link>
      </li>
      <li className="submenu-item">
        <Link to="#">Translations</Link>
      </li>
      <li className="submenu-item">
        <Link to="#">Ghanada Club</Link>
      </li>
      <li className="submenu-item">
        <Link to="#">Advertisements</Link>
      </li>
      <li className="submenu-item">
        <Link to="#">Audio Drama</Link>
      </li>
      <li className="submenu-item">
        <Link to="#">Special Issues</Link>
      </li>
      <li className="submenu-item">
        <Link to="#">Comics</Link>
      </li>
      <li className="submenu-item">
        <Link to="#">Artist's Gallery</Link>
      </li>
    </ul>
  )
}

export default Mishmash
