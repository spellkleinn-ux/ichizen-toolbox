# Toolbox — Annuaire communautaire d'outils

Annuaire d'outils avec recherche, filtres par catégorie, pages de détail, système de vote et soumission communautaire.

**Stack** : React + Vite · Supabase (PostgreSQL) · Vercel

---

## 1. Prérequis

- Node.js 18+
- Un compte [Supabase](https://supabase.com) (gratuit)
- Un compte [Vercel](https://vercel.com) (gratuit)
- Un compte [GitHub](https://github.com) (gratuit)

---

## 2. Créer la base de données Supabase

1. Va sur [supabase.com](https://supabase.com) → **New project**
2. Copie l'URL et la clé `anon` depuis **Settings → API**
3. Va dans **SQL Editor** et exécute le SQL dans `src/lib/supabase.js` (section commentée en bas du fichier)

---

## 3. Configuration locale

```bash
# Cloner le projet
git clone https://github.com/TON_COMPTE/toolbox.git
cd toolbox

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env.local
# Édite .env.local avec tes clés Supabase

# Lancer en dev
npm run dev
```

---

## 4. Déployer sur Vercel

```bash
# 1. Push sur GitHub
git add .
git commit -m "init"
git push

# 2. Sur vercel.com → Import project → sélectionne ton repo
# 3. Dans "Environment Variables", ajoute :
#    VITE_SUPABASE_URL     → ton URL Supabase
#    VITE_SUPABASE_ANON_KEY → ta clé anon
# 4. Deploy !
```

---

## 5. Gérer les soumissions

Les soumissions des visiteurs arrivent dans la table `submissions` avec `status = 'pending'`.

Pour approuver un outil :
1. Va dans Supabase → **Table Editor** → `submissions`
2. Copie les infos de l'outil
3. Insère dans la table `tools` avec `approved = true`

> Tu peux aussi créer un petit dashboard admin plus tard pour gérer ça directement.

---

## 6. Monétisation (revenus passifs)

- **Affiliation** : remplace les URLs par des liens affiliés (Notion, Canva, etc. ont tous des programmes)
- **Liens sponsorisés** : facture aux outils une mise en avant (badge "Sponsorisé")
- **Google AdSense** : ajoute un script AdSense dans `index.html` une fois 1 000+ visiteurs/mois

---

## 7. Structure du projet

```
src/
  components/
    Navbar.jsx       — Navigation principale
    Footer.jsx       — Pied de page
    ToolCard.jsx     — Carte outil dans la grille
  pages/
    Home.jsx         — Page d'accueil avec recherche + grille
    ToolDetail.jsx   — Page détail d'un outil + vote
    Submit.jsx       — Formulaire de soumission
  hooks/
    useTools.js      — Hooks de fetch Supabase
  lib/
    supabase.js      — Client Supabase + schéma SQL
  index.css          — Styles globaux
  main.jsx           — Point d'entrée React
  App.jsx            — Router
```
