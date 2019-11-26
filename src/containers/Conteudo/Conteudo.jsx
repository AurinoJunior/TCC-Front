import React from 'react'

import { Controles } from '../../components'
import ConteudoStyle from './ConteudoStyle'

const Conteudo = function (props) {
  return (
    <ConteudoStyle>
      <ul>
        <li>Filtro</li><Controles />
        <li>Termostato</li><Controles />
        <li>Cooler</li><Controles />
        <li>Repositor</li><Controles />
        <li>Alimentador</li><Controles />
        <li>Iluminação</li><Controles />
      </ul>
    </ConteudoStyle>
  )
}
export default Conteudo
