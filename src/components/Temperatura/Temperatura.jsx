import React, { Component } from 'react'
import axios from '../../service/axios'

import TemperaturaStyle from './TemperaturaStyle'

export default class Temperatura extends Component {
  state = {
    graus: 20
  }

  componentDidMount () {
    this.timerTemp = setInterval(() => this.getTemperatura(), 3000)
  }

  async getTemperatura () {
    const result = await axios.get('/temperatura')
    const { temperatura } = result.data
    this.setState({ graus: temperatura })
  }

  render () {
    return (
      <TemperaturaStyle>
        Temperatura: <span>{`${this.state.graus}ºC`}</span>
      </TemperaturaStyle>
    )
  }
}
