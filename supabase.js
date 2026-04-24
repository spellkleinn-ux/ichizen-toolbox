import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link to="/" className="nav-logo">Toolbox</Link>
        <div className="nav-links">
          <NavLink to="/" className="nav-link" end>Explorer</NavLink>
          <NavLink to="/submit" className="nav-link primary">+ Soumettre un outil</NavLink>
        </div>
      </div>
    </nav>
  )
}
