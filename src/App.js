import React, { Component } from 'react'

import { Topo, Conteudo } from './containers'

class App extends Component {
  state = {
    response: '',
    endpoit: 'http://localhost:3333'
  }

  render () {
    return (
      <div className="main-container" >
        <Topo />
        <Conteudo />
      </div>
    )
  }
}

export default App
