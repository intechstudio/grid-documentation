import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element,
  linkUrl: string,
  linkTitle: string
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Get started with Grid',
    Svg: '/img/editor_icon.svg',
    description: (
      <>
        If you're new to Grid and the Grid Editor check out our guides.
      </>
    ),
    linkUrl: '/guides/introduction',
    linkTitle: 'Beginners Guide to Grid'
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
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={Svg}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="text--center padding-horiz--md">
        <a href={linkUrl}>{linkTitle}</a>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
