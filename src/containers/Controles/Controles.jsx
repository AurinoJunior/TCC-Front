import React from 'react'

import { SwitchToggle } from '../../components'
import ControlesStyle from './ControlesStyle'

const Controles = () => (
  <ControlesStyle>
    <ul>
      <li>Filtro</li><SwitchToggle />
      <li>Termostato</li><SwitchToggle />
      <li>Cooler</li><SwitchToggle />
      <li>Repositor</li><SwitchToggle />
      <li>Alimentador</li><SwitchToggle />
      <li>Iluminação</li><SwitchToggle />
    </ul>
  </ControlesStyle>
)

export default Controles
