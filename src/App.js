import React from 'react'
import { Topo } from './containers'

function App () {
  return (
    <div style={style}>
      <Topo />
    </div>
  )
}

const style = {
  width: 480,
  height: 320,
  backgroundColor: 'white',
  padding: 17,
  boxSizing: 'border-box'
}

export default App
