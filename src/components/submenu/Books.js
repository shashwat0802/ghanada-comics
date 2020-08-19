import React from "react"
import { Link } from "react-router-dom"
const Books = () => {
  return (
    <ul className="books-submenu">
      <li className="submenu-item">
        <Link to="/ghanada-gallery/books-with-new-ghanada-texts">
          Books with new Ghanda texts
        </Link>
      </li>
      <li className="submenu-item">
        <Link to="/ghanada-gallery/complete-collection">
          Complete collection
        </Link>
      </li>
      <li className="submenu-item">
        <Link to="/ghanada-gallery/compilations">Compilations</Link>
      </li>
      <li className="submenu-item">
        <Link to="/ghanada-gallery/other-anthologies">Other Anthologies</Link>
      </li>
    </ul>
  )
}

export default Books
