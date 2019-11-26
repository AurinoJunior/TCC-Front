import React, { Component } from 'react'

import NivelAguaStyle from './NivelAguaStyle'

export default class NivelAgua extends Component {
  state = {
    nivelOk: 'Bom'
  }

  // Verifica nivel de agua antes de renderizar o componente
  // componentDidMount () {

  // }

  render () {
    return (
      <NivelAguaStyle>
        Nivel de água: <span>{`${this.state.nivelOk}`}</span>
      </NivelAguaStyle>
    )
  }
}
