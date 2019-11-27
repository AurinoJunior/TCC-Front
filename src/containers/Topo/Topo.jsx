import React, { Component } from 'react'

import TopoStyle from './TopoStyle'

import { Temperatura, NivelAgua, HoraData } from '../../components'

export default class Topo extends Component {
  render () {
    return (
      <TopoStyle>
        <HoraData />
        <a href="#">
          <img src="/image/settings.png" alt="config" />
        </a>
        <Temperatura />
        <NivelAgua />
      </TopoStyle >
    )
  }
}
