*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #f7f6f3;
  --surface: #ffffff;
  --border: #e4e2da;
  --border-hover: #c8c5bb;
  --text: #1a1916;
  --muted: #6b6860;
  --accent: #1a1916;
  --accent-fg: #f7f6f3;

  --cat-ia:       #eeedfe; --cat-ia-fg:       #3c3489;
  --cat-prod:     #e1f5ee; --cat-prod-fg:     #085041;
  --cat-design:   #fbeaf0; --cat-design-fg:   #72243e;
  --cat-sante:    #e6f1fb; --cat-sante-fg:    #0c447c;
  --cat-finance:  #faeeda; --cat-finance-fg:  #633806;
  --cat-dev:      #eaf3de; --cat-dev-fg:      #27500a;
  --cat-autre:    #f1efe8; --cat-autre-fg:    #2c2c2a;

  --font-display: 'Syne', sans-serif;
  --font-body: 'Inter', sans-serif;
  --radius: 12px;
  --radius-sm: 8px;
  --radius-pill: 999px;
  --shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.08);
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #111110;
    --surface: #1c1c1a;
    --border: #2e2e2b;
    --border-hover: #4a4a46;
    --text: #f0ede8;
    --muted: #8a8880;
    --accent: #f0ede8;
    --accent-fg: #111110;
  }
}

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--text);
  font-size: 15px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a { color: inherit; text-decoration: none; }

button {
  font-family: var(--font-body);
  cursor: pointer;
  border: none;
  background: none;
}

input, textarea, select {
  font-family: var(--font-body);
  font-size: 15px;
  color: var(--text);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 10px 14px;
  width: 100%;
  outline: none;
  transition: border-color 0.15s;
}
input:focus, textarea:focus, select:focus {
  border-color: var(--border-hover);
}

/* Layout */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Navbar */
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(8px);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}
.nav-logo {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: var(--text);
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
}
.nav-link {
  font-size: 14px;
  color: var(--muted);
  padding: 6px 12px;
  border-radius: var(--radius-sm);
  transition: color 0.15s, background 0.15s;
}
.nav-link:hover { color: var(--text); background: var(--border); }
.nav-link.primary {
  background: var(--accent);
  color: var(--accent-fg);
  font-weight: 500;
}
.nav-link.primary:hover { opacity: 0.88; background: var(--accent); }

/* Hero */
.hero {
  padding: 72px 0 48px;
  text-align: center;
}
.hero-eyebrow {
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 16px;
}
.hero h1 {
  font-family: var(--font-display);
  font-size: clamp(36px, 6vw, 64px);
  font-weight: 700;
  letter-spacing: -1.5px;
  line-height: 1.05;
  color: var(--text);
  margin-bottom: 16px;
}
.hero p {
  font-size: 17px;
  color: var(--muted);
  max-width: 500px;
  margin: 0 auto 36px;
}
.hero-stats {
  display: flex;
  gap: 32px;
  justify-content: center;
  font-size: 13px;
  color: var(--muted);
  margin-top: 32px;
}
.hero-stats strong { color: var(--text); font-weight: 600; }

/* Search */
.search-bar {
  max-width: 560px;
  margin: 0 auto;
  position: relative;
}
.search-bar input {
  border-radius: var(--radius-pill);
  padding: 14px 20px 14px 48px;
  font-size: 15px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-md);
  background: var(--surface);
}
.search-icon {
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--muted);
  pointer-events: none;
}

/* Filters */
.filters-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding: 28px 0 20px;
  align-items: center;
}
.filters-label {
  font-size: 13px;
  color: var(--muted);
  margin-right: 4px;
}
.chip {
  padding: 6px 16px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border);
  font-size: 13px;
  font-weight: 500;
  color: var(--muted);
  background: var(--surface);
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
}
.chip:hover { border-color: var(--border-hover); color: var(--text); }
.chip.active { background: var(--accent); color: var(--accent-fg); border-color: var(--accent); }

/* Sort + count row */
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.count-text { font-size: 13px; color: var(--muted); }
.sort-select {
  width: auto;
  font-size: 13px;
  padding: 6px 12px;
  border-radius: var(--radius-sm);
}

/* Tool grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 14px;
  padding-bottom: 80px;
}

/* Tool card */
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
  transition: border-color 0.15s, box-shadow 0.15s, transform 0.1s;
  text-decoration: none;
  color: inherit;
}
.card:hover {
  border-color: var(--border-hover);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
.card-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; }
.card-logo {
  width: 44px; height: 44px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--bg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  flex-shrink: 0;
  overflow: hidden;
}
.card-logo img { width: 100%; height: 100%; object-fit: contain; border-radius: 8px; }
.votes-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: var(--muted);
  padding: 4px 8px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border);
  background: var(--bg);
  flex-shrink: 0;
}
.card-name {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 600;
  color: var(--text);
}
.card-desc {
  font-size: 13px;
  color: var(--muted);
  line-height: 1.55;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card-footer { display: flex; align-items: center; justify-content: space-between; margin-top: auto; }
.cat-badge {
  font-size: 11px;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: var(--radius-pill);
}
.arrow-icon { font-size: 16px; color: var(--muted); transition: transform 0.15s; }
.card:hover .arrow-icon { transform: translate(2px, -2px); }

/* Category color map */
.cat-IA       { background: var(--cat-ia);      color: var(--cat-ia-fg); }
.cat-Productivité { background: var(--cat-prod); color: var(--cat-prod-fg); }
.cat-Design   { background: var(--cat-design);  color: var(--cat-design-fg); }
.cat-Santé    { background: var(--cat-sante);   color: var(--cat-sante-fg); }
.cat-Finance  { background: var(--cat-finance); color: var(--cat-finance-fg); }
.cat-Dev      { background: var(--cat-dev);     color: var(--cat-dev-fg); }
.cat-Autre    { background: var(--cat-autre);   color: var(--cat-autre-fg); }

/* Detail page */
.detail-back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: var(--muted);
  margin-bottom: 32px;
  padding: 8px 0;
  transition: color 0.15s;
}
.detail-back:hover { color: var(--text); }
.detail-hero {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 32px;
}
.detail-logo {
  width: 72px; height: 72px;
  border-radius: 16px;
  border: 1px solid var(--border);
  background: var(--bg);
  display: flex; align-items: center; justify-content: center;
  font-size: 36px; flex-shrink: 0;
  overflow: hidden;
}
.detail-logo img { width: 100%; height: 100%; object-fit: contain; border-radius: 14px; }
.detail-info h1 { font-family: var(--font-display); font-size: 28px; font-weight: 700; letter-spacing: -0.5px; margin-bottom: 6px; }
.detail-meta { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.detail-desc { font-size: 16px; color: var(--muted); line-height: 1.7; margin-bottom: 24px; max-width: 640px; }
.detail-actions { display: flex; gap: 12px; flex-wrap: wrap; }
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: var(--radius-pill);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
}
.btn:hover { border-color: var(--border-hover); box-shadow: var(--shadow); }
.btn-primary { background: var(--accent); color: var(--accent-fg); border-color: var(--accent); }
.btn-primary:hover { opacity: 0.88; }
.btn-vote { font-family: var(--font-body); }
.btn-vote.voted { background: #e1f5ee; color: #085041; border-color: #9fe1cb; }
.tags-row { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 24px; }
.tag {
  font-size: 12px;
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--muted);
}

/* Submit form */
.form-page { max-width: 560px; margin: 0 auto; padding: 64px 0 80px; }
.form-page h1 { font-family: var(--font-display); font-size: 32px; font-weight: 700; letter-spacing: -0.5px; margin-bottom: 8px; }
.form-page .subtitle { color: var(--muted); margin-bottom: 40px; }
.form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; }
.form-group label { font-size: 14px; font-weight: 500; }
.form-group small { font-size: 12px; color: var(--muted); }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.success-box {
  background: #e1f5ee;
  border: 1px solid #9fe1cb;
  border-radius: var(--radius);
  padding: 24px;
  text-align: center;
  color: #085041;
}
.success-box h2 { font-family: var(--font-display); margin-bottom: 8px; }

/* Empty state */
.empty {
  grid-column: 1 / -1;
  padding: 80px 0;
  text-align: center;
  color: var(--muted);
}
.empty p { font-size: 15px; margin-top: 8px; }

/* Skeleton */
.skeleton {
  background: linear-gradient(90deg, var(--border) 25%, var(--bg) 50%, var(--border) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-sm);
}
@keyframes shimmer { to { background-position: -200% 0; } }
.skeleton-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 160px;
}

/* Footer */
.footer {
  border-top: 1px solid var(--border);
  padding: 32px 0;
  text-align: center;
  font-size: 13px;
  color: var(--muted);
}
.footer a { color: var(--muted); text-decoration: underline; }

/* Responsive */
@media (max-width: 600px) {
  .hero { padding: 48px 0 32px; }
  .hero h1 { font-size: 36px; }
  .detail-hero { flex-direction: column; }
  .form-row { grid-template-columns: 1fr; }
  .nav-links .nav-link:not(.primary) { display: none; }
}
