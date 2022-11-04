import React, { useEffect } from 'react'
import './style.css'

export default function Component() {
  useEffect(() => {
    const DocsSearchBar = require('docs-searchbar.js').default

    DocsSearchBar({
      hostUrl: 'https://meilisearch-1n6r.onrender.com/',
      apiKey:'securepassword',
      indexUid: 'grid-docs',
      inputSelector: '#search-bar-input',
      debug: process.env.NODE_ENV === 'development',
    })
  }, [])

  return (
    <input
      type="search"
      id="search-bar-input"
      className="navbar__search navbar__search-input"
      placeholder="Search"
    />
  )
}