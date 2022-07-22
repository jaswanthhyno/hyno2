import React from 'react'
import Source1 from './Source1'
import Source2 from './Source2'
import "./Combainer.css"

function Combainer() {
  return (
    <div className='fotterApp'>
        <Source1 />
    <Source2 />
    </div>
  )
}

export default Combainer