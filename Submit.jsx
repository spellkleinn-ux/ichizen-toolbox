import { Link } from 'react-router-dom'

const CATEGORY_EMOJIS = {
  'IA': '✦',
  'Productivité': '◆',
  'Design': '❖',
  'Santé': '⊕',
  'Finance': '◎',
  'Dev': '⌥',
  'Autre': '◉',
}

export default function ToolCard({ tool }) {
  const emoji = CATEGORY_EMOJIS[tool.category] ?? '◉'
  const catClass = `cat-${tool.category.replace(/\s/g, '')}`

  return (
    <Link to={`/tool/${tool.slug}`} className="card">
      <div className="card-header">
        <div className="card-logo">
          {tool.logo_url
            ? <img src={tool.logo_url} alt={tool.name} />
            : <span>{emoji}</span>
          }
        </div>
        <div className="votes-badge">
          ▲ {tool.votes}
        </div>
      </div>

      <div>
        <div className="card-name">{tool.name}</div>
        <div className="card-desc">{tool.description}</div>
      </div>

      <div className="card-footer">
        <span className={`cat-badge ${catClass}`}>{tool.category}</span>
        <span className="arrow-icon">↗</span>
      </div>
    </Link>
  )
}
