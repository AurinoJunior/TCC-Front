import React, { Component } from 'react'
import Switch from '@material-ui/core/Switch'

import ControlesStyle from './ControlesStyle'

export default class BotaoAuto extends Component {
  constructor (props) {
    super(props)
    this.changeAuto = this.changeAuto.bind(this)
  }

  state = {
    botaoAtivo: false
  }

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
