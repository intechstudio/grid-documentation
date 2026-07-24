import React, { useEffect } from 'react'
import mermaid from 'mermaid'

mermaid.initialize({
  startOnLoad: false,
})

const Mermaid = ({ chart }) => {
  useEffect(() => {
    mermaid.run()
  }, [])
  return <div className="mermaid">{chart}</div>
}

export default Mermaid
