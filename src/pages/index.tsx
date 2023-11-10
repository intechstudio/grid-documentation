import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'

import styles from './index.module.css'

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container h-full">
        <div className="md:py-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-left max-w-xl w-full md:w-1/2">
            <h1>
              Welcome to the Intech Studio documentation!
            </h1>
            <p>
              If you're new to Grid and the Grid Editor, or look forward to get deep into Grid customization you're in the right place!
            </p>
            <ul>
              <li>
                For new <b>Grid</b> or <b>Knot</b> users we recommend starting with the <Link to={'category/getting-started'}>Getting Started</Link> section!
              </li>
              <li>
                For installing the <b>Grid Editor</b>, check out the <Link to={'category/grid-installing-editor'}>Setup</Link> guide!
              </li>
              <li>
                For learning Grid Editor and Grid configuration, we recommend browsing the <Link to={'wiki/introduction'}>Wiki</Link>.
              </li>
            </ul>

            Still have more questions? Ask us directly on our <Link to={'https://links.intech.studio/discord'}>Community Discord</Link> server or send us an email to <Link to={'mailto:support@intech.studio'}>support@intech.studio</Link> !
            Oh and don't forget to have fun!

            <p className="mt-4 ">
              Intech Studio Team
            </p>

          </div>
          <div className='w-full md:w-1/2'>
            <img className="rounded-lg border-2 border-black border-opacity-50" src="./img/2023-03-getting-started.jpg" alt="Grid is in good hands" />
            <div className='italic text-xs'></div>
          </div>
        </div>

      </div>
    </header>
  )
}



export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Documentation site for Grid, Knot and other Intech Studio projects."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
