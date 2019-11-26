import React from 'react'

import TopoStyle from './TopoStyle'
import { Temperatura, NivelAgua, HoraData } from '../../components'

const Topo = () => (
  <TopoStyle>
    <HoraData />
    <a href="#">
      <img src="/image/settings.png" alt="config" />
    </a>
    <Temperatura />
    <NivelAgua />
  </TopoStyle>
)

export default Topo
