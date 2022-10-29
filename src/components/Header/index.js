import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <ul className="nav-header">
    <li>
      <Link to="/" className="nav-link">
        Home
      </Link>
    </li>
    <li>
      <Link to="/about" className="nav-link">
        About
      </Link>
    </li>
    <li>
      <Link to="/contact" className="nav-link">
        Contact
      </Link>
    </li>
  </ul>
)
export default Header
