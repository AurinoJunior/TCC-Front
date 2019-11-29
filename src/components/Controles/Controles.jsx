import React, { Component } from 'react'
import Switch from '@material-ui/core/Switch'
import axios from '../../service/axios'

import ControlesStyle from './ControlesStyle'

export default class Controles extends Component {
  constructor (props) {
    super(props)
    this.changeAuto = this.changeAuto.bind(this)
    this.toggleRele = this.toggleRele.bind(this)
    this.mudaToggle = this.mudaToggle.bind(this)
  }

  state = {
    automatico: false,
    toggle: false,
    tipoComponente: ''
  }

  componentDidMount () {
    // eslint-disable-next-line react/prop-types
    this.setState({ tipoComponente: this.props.tipo })
  }

  componentDidUpdate () {
    this.toggleRele()
  }

  // Faz a troca de ligado ou desligado do rele
  async toggleRele () {
    console.log('4', this.state.toggle)

    await axios.post('/relay', {
      toggle: this.state.toggle,
      tipoComponente: this.state.tipoComponente
    })

    if (this.state.tipoComponente === 'Alimentador' && this.state.toggle) {
      this.desligaAlimentador()
    }
  }

  mudaToggle () {
    this.setState({ toggle: !this.state.toggle })
  }

  desligaAlimentador () {
    this.alimentadorTime = setTimeout(async () => {
      await axios.post('/relay', {
        toggle: false,
        tipoComponente: this.state.tipoComponente
      })
    }, 9790)
  }

  // Controle botão automatico
  changeAuto () {
    // Valor invertido
    this.setState({ automatico: !this.state.automatico })
  }

  render () {
    const style = {
      backgroundColor: this.state.automatico ? '#18d68d' : 'grey'
    }

    return (
      <>
        {!this.state.automatico ? (
          <Switch
            onChange={this.mudaToggle}
            color="primary"
            checked={this.state.toggle}
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
