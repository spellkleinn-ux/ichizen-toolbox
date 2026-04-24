import { useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase'

export function useTools({ category = null, search = '', sort = 'votes' } = {}) {
  const [tools, setTools] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [total, setTotal] = useState(0)

  const fetchTools = useCallback(async () => {
    setLoading(true)
    try {
      let query = supabase
        .from('tools')
        .select('*', { count: 'exact' })
        .eq('approved', true)

      if (category) query = query.eq('category', category)

      if (search.trim()) {
        query = query.or(
          `name.ilike.%${search}%,description.ilike.%${search}%,tags.cs.{${search}}`
        )
      }

      if (sort === 'votes') query = query.order('votes', { ascending: false })
      else if (sort === 'recent') query = query.order('created_at', { ascending: false })
      else if (sort === 'alpha') query = query.order('name', { ascending: true })

      const { data, error: err, count } = await query

      if (err) throw err
      setTools(data ?? [])
      setTotal(count ?? 0)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [category, search, sort])

  useEffect(() => { fetchTools() }, [fetchTools])

  return { tools, loading, error, total, refetch: fetchTools }
}

export function useToolBySlug(slug) {
  const [tool, setTool] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!slug) return
    setLoading(true)
    supabase
      .from('tools')
      .select('*')
      .eq('slug', slug)
      .eq('approved', true)
      .single()
      .then(({ data, error: err }) => {
        if (err) setError(err.message)
        else setTool(data)
        setLoading(false)
      })
  }, [slug])

  return { tool, loading, error }
}

export function useCategories() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    supabase
      .from('tools')
      .select('category')
      .eq('approved', true)
      .then(({ data }) => {
        if (!data) return
        const unique = [...new Set(data.map(t => t.category))].sort()
        setCategories(unique)
      })
  }, [])

  return categories
}
