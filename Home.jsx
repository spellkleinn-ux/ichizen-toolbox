import { useState, useCallback } from 'react'
import { useTools, useCategories } from '../hooks/useTools'
import ToolCard from '../components/ToolCard.jsx'

function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton" style={{ width: 44, height: 44, borderRadius: 10 }} />
      <div className="skeleton" style={{ height: 16, width: '60%' }} />
      <div className="skeleton" style={{ height: 12, width: '90%' }} />
      <div className="skeleton" style={{ height: 12, width: '70%' }} />
    </div>
  )
}

export default function Home() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState(null)
  const [sort, setSort] = useState('votes')
  const [inputValue, setInputValue] = useState('')

  const categories = useCategories()
  const { tools, loading, total } = useTools({ category, search, sort })

  // Debounce search
  const handleSearch = useCallback((e) => {
    const val = e.target.value
    setInputValue(val)
    clearTimeout(window._searchTimeout)
    window._searchTimeout = setTimeout(() => setSearch(val), 300)
  }, [])

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <span className="hero-eyebrow">Annuaire communautaire</span>
          <h1>Les meilleurs outils,<br />tous réunis ici.</h1>
          <p>Découvrez, votez et partagez les outils qui changent votre quotidien.</p>

          <div className="search-bar">
            <svg className="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Rechercher un outil..."
              value={inputValue}
              onChange={handleSearch}
              autoFocus
            />
          </div>

          <div className="hero-stats">
            <span><strong>{total}</strong> outils répertoriés</span>
            <span><strong>{categories.length}</strong> catégories</span>
            <span><strong>100%</strong> gratuit</span>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="container">
        <div className="filters-row">
          <span className="filters-label">Filtrer :</span>
          <button
            className={`chip${!category ? ' active' : ''}`}
            onClick={() => setCategory(null)}
          >
            Tout
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              className={`chip${category === cat ? ' active' : ''}`}
              onClick={() => setCategory(cat === category ? null : cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Toolbar */}
        <div className="toolbar">
          <span className="count-text">
            {loading ? 'Chargement…' : `${tools.length} outil${tools.length !== 1 ? 's' : ''}`}
          </span>
          <select
            className="sort-select"
            value={sort}
            onChange={e => setSort(e.target.value)}
          >
            <option value="votes">Plus populaires</option>
            <option value="recent">Plus récents</option>
            <option value="alpha">Alphabétique</option>
          </select>
        </div>

        {/* Grid */}
        <div className="grid">
          {loading ? (
            Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
          ) : tools.length === 0 ? (
            <div className="empty">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3"/>
                <path d="M13 27l14-14M27 27L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <p>Aucun outil trouvé pour « {search || category} »</p>
            </div>
          ) : (
            tools.map(tool => <ToolCard key={tool.id} tool={tool} />)
          )}
        </div>
      </div>
    </main>
  )
}
