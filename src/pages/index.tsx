import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'

import styles from './index.module.css'

import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch-dom';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';

const searchClient = instantMeiliSearch('https://meilisearch-1n6r.onrender.com/', 'securepassword');

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="guides/introduction"
          >
            Beginners Guide to Grid
          </Link>
        </div>
      </div>
    </header>
  )
}

const Hit = ({ hit }) => <Highlight attribute="name" hit={hit} />;

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <InstantSearch
        indexName="grid-documentation"
        searchClient={searchClient}
      >
      <SearchBox />
      <Hits hitComponent={Hit} />
    </InstantSearch>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
