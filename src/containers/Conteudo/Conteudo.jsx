import React from 'react'

import { Controles } from '../../components'
import ConteudoStyle from './ConteudoStyle'

const Conteudo = function (props) {
  return (
    <ConteudoStyle>
      <ul>
        <li>Filtro</li><Controles tipo="Filtro" />
        <li>Termostato</li><Controles tipo="Termostato" />
        <li>Cooler</li><Controles tipo="Cooler" />
        <li>Repositor</li><Controles tipo="Repositor" />
        <li>Alimentador</li><Controles tipo="Alimentador" />
        <li>Iluminação</li><Controles tipo="Iluminacao" />
      </ul>
    </ConteudoStyle>
  )
}
export default Conteudo
