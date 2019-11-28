import React, { Component } from 'react'
import Switch from '@material-ui/core/Switch'
import axios from '../../service/axios'

import ControlesStyle from './ControlesStyle'

export default class BotaoAuto extends Component {
  constructor (props) {
    super(props)
    this.changeAuto = this.changeAuto.bind(this)
    this.toggleRele = this.toggleRele.bind(this)
  }

  state = {
    botaoAtivo: false,
    toggle: false,
    tipoComponente: ''
  }

  componentDidMount () {
    // eslint-disable-next-line react/prop-types
    this.setState({ tipoComponente: this.props.tipo })
  }

  // Faz a troca de ligado ou desligado do rele
  async toggleRele () {
    const result = await axios.post('/relay', {
      toggle: !this.state.toggle,
      tipoComponente: this.state.tipoComponente
    })

    this.setState({ toggle: result.data.toggle })
  }

  // Controle botão automatico
  changeAuto () {
    // Valor invertido
    const value = !this.state.botaoAtivo

    this.setState({ botaoAtivo: value })
  }

  render () {
    const style = {
      backgroundColor: this.state.botaoAtivo ? '#18d68d' : 'grey'
    }

    return (
      <>
        {!this.state.botaoAtivo ? (
          <Switch
            onChange={this.toggleRele}
            color="primary"
          />
        ) : (
          <Switch
            color="primary"
            disabled
          />)
        }

        <ControlesStyle style={style} onClick={this.changeAuto}>
          Auto
        </ControlesStyle>
      </>
    )
  }
}
