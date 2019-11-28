import React, { Component } from 'react'

import TopoStyle from './TopoStyle'

import { Temperatura, NivelAgua, HoraData, Camera } from '../../components'

export default class Topo extends Component {
  render () {
    return (
      <TopoStyle>
        <HoraData className="HD" />
        <img className="botaoConfig" src="/image/settings.png" alt="config" />
        <Temperatura className="temperatura" />
        <NivelAgua className="nivelAgua" />
        <Camera className="camera" />
      </TopoStyle >
    )
  }
}
