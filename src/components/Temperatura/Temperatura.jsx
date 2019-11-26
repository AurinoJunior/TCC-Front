import React, { Component } from 'react'

import TemperaturaStyle from './TemperaturaStyle'

export default class Temperatura extends Component {
  state = {
    graus: 22
  }

  render () {
    return (
      <TemperaturaStyle>
        Temperatura: <span>{`${this.state.graus}ºC`}</span>
      </TemperaturaStyle>
    )
  }
}
