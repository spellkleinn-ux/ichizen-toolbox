import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} Toolbox — Annuaire communautaire d'outils.{' '}
          <Link to="/submit">Soumettre un outil</Link>
        </p>
      </div>
    </footer>
  )
}
