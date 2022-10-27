import React from 'react'
import Link from '@docusaurus/Link'
import clsx from 'clsx'
import styles from './styles.module.css'
import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

let imageUrl = '/images/docs/card_fallback.webp'

interface LinkProps {
  title: string
  downloadLink: string
}

function DownloadButton(props) {
  let { title = 'Download', downloadLink = 'downloadLink' }: LinkProps = props

  return (
    <div
      style={{ marginTop: '10px', marginBottom: '10px', width: 'fit-content' }}
    >
      <a href={downloadLink} download>
        <div className="button button--primary button--md">
          <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
            <ThemedImage
              alt="download icon"
              sources={{
                light: useBaseUrl('/img/icon/download_light.svg'),
                dark: useBaseUrl('/img/icon/download_dark.svg'),
              }}
            />
            <div>{title}</div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default DownloadButton
