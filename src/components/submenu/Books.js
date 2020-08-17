import React from "react"
import { Link } from "react-router-dom"
const Books = () => {
  return (
    <ul className="books-submenu">
      <li className="submenu-item">
        <Link to href="#">
          Books with new Ghanda texts
        </Link>
      </li>
      <li className="submenu-item">
        <Link to href="#">
          Complete collection
        </Link>
      </li>
      <li className="submenu-item">
        <Link to href="#">
          Compilations
        </Link>
      </li>
      <li className="submenu-item">
        <Link to href="#">
          Other Anthologies
        </Link>
      </li>
    </ul>
  )
}

export default Books
