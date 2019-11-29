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
    this.ligaCooler()
    this.ligaTermostato()
  }

  async ligaCooler () {
    if (this.state.graus >= 26) {
      await axios.post('/relay', {
        toggle: true,
        tipoComponente: 'Cooler'
      })
    } else {
      await axios.post('/relay', {
        toggle: false,
        tipoComponente: 'Cooler'
      })
    }
  }

  async ligaTermostato () {
    if (this.state.graus <= 18) {
      await axios.post('/relay', {
        toggle: true,
        tipoComponente: 'Termostato'
      })
    } else {
      await axios.post('/relay', {
        toggle: false,
        tipoComponente: 'Termostato'
      })
    }
  }

  render () {
    return (
      <TemperaturaStyle>
        Temperatura: <span>{`${this.state.graus}ºC`}</span>
      </TemperaturaStyle>
    )
  }
}
