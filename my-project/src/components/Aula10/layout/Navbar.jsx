import { Link } from "react-router-dom"
import Styles from "./Navbar.module.css"

export function Navbar() {

  return (
    <nav>
      <ul>
        <li>
          <Link className={Styles.Item} to="/">Home</Link>
        </li>
        <li>
          <Link className={Styles.Item} to="/about">About Us</Link>
        </li>
        <li>
          <Link className={Styles.Item} to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  )
}
