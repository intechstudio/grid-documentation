import React from 'react'

interface LinkProps {
    title: string
    protocolUrl: string
}

function ProtocolUrl(props: LinkProps) {
    let { title = 'Download', protocolUrl = 'protocolUrl' } = props

    return (
        <div
        >
            <a href={protocolUrl} download>
                {title}
            </a>
        </div>
    )
}

export default ProtocolUrl
