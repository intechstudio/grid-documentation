import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import ThemedImage from '@theme/ThemedImage'
import useBaseUrl from '@docusaurus/useBaseUrl'

let imageUrl = '/images/docs/card_fallback.webp'

interface LinkProps {
  imgPathLight: string
  imgPathDark: string
  imgAlt: string
  imgWidth: string | number
  title: string
  description: string
  downloadLink: string
}

function DetailedDownloadButton(props) {
  let {
    imgPathLight = '',
    imgPathDark = '',
    imgAlt = 'fallback image',
    imgWidth = '25px',
    title = 'title',
    description = 'description',
    downloadLink = 'downloadLink',
  }: LinkProps = props

  return (
    <a href={downloadLink} download>
      <div
        style={{
          marginTop: '10px',
          marginBottom: '10px',
          width: 'fit-content',
        }}
      >
        <div className="button button--primary button--md ">
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '10px',
              textAlign: 'left',
            }}
          >
            <div>
              <ThemedImage
                style={{
                  width: `${imgWidth}`,
                }}
                alt={imgAlt}
                sources={{
                  /* light: useBaseUrl('/img/icon/windows_light.svg'),
                  dark: useBaseUrl('/img/icon/windows_dark.svg'), */
                  light: useBaseUrl(`${imgPathLight}`),
                  dark: useBaseUrl(`${imgPathDark}`),
                }}
              />
            </div>

            <div>
              <div>{title}</div>
              <div style={{ fontSize: '0.9rem' }}>{description}</div>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default DetailedDownloadButton
