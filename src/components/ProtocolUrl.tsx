import React from 'react'

interface LinkProps {
    title: string
    protocolUrl: string
}

function ProtocolUrl(props) {
    let { title = 'Download', protocolUrl = 'protocolUrl' }: LinkProps = props

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
