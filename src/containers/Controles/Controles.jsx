import React from 'react'

import { SwitchToggle, BotaoAuto } from '../../components'
import ControlesStyle from './ControlesStyle'

const Controles = () => (
  <ControlesStyle>
    <ul>
      <li>Filtro</li><SwitchToggle /><BotaoAuto />
      <li>Termostato</li><SwitchToggle /><BotaoAuto />
      <li>Cooler</li><SwitchToggle /><BotaoAuto />
      <li>Repositor</li><SwitchToggle /><BotaoAuto />
      <li>Alimentador</li><SwitchToggle /><BotaoAuto />
      <li>Iluminação</li><SwitchToggle /><BotaoAuto />
    </ul>
  </ControlesStyle>
)

export default Controles
