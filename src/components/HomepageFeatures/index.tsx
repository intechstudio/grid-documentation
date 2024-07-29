import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import Link from '@docusaurus/Link'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element,
  linkUrl: string,
  linkTitle: string
}

const FeatureList: FeatureItem[] = [

  {
    title: 'Get started',
    Svg: '/img/editor_icon.svg',
    description: (
      <>
        If you're new to Grid, Grid Editor or Knot check out our getting started guides.
      </>
    ),
    linkUrl: '/category/getting-started',
    linkTitle: 'Getting started'
  },
  {
    title: 'Updating the firmware',
    Svg: '/img/trbl.svg',
    description: (
      <>
        Check out the automatic and manual firmware update methods for Grid controllers.
      </>
    ),
    linkUrl: '/guides/troubleshooting/firmware-update',
    linkTitle: 'Firmware update'
  },
  {
    title: 'Wiki + Reference Manual',
    Svg: '/img/docs_lua.svg',
    description: (
      <>
        Ever growing documentation for Grid's underlying lua runtime.
      </>
    ),
    linkUrl: '/wiki/introduction',
    linkTitle: 'Wiki'
  },
]

// <Svg className={styles.featureSvg} role="img" />

function Feature({ title, Svg, description, linkUrl, linkTitle }: FeatureItem) {
  return (
    <div className={clsx('col col--4 justify-between flex flex-col')}>
      <div className="text--left padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="mb-8 text--left padding-horiz--md">
        <Link to={linkUrl} className="px-8 py-4 rounded-md hover:no-underline font-medium text-white hover:text-white bg-blue-500 hover:bg-blue-600 dark:bg-emerald-500 hover:dark:bg-emerald-600">{linkTitle}</Link>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container max-w-screen-4xl md:py-16">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
