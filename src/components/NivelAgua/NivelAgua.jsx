import React, { Component } from 'react'
import axios from '../../service/axios'

import NivelAguaStyle from './NivelAguaStyle'

export default class NivelAgua extends Component {
  state = {
    nivelOk: 'Bom'
  }

  // Verifica nivel de agua antes de renderizar o componente
  componentDidMount () {
    this.nivelTimer = setInterval(() => this.getNivelAgua(), 5000)
  }

  async getNivelAgua () {
    const result = await axios.get('/nivelagua')
    const { nivel } = result.data
    console.log(nivel)
    if (nivel === 1) {
      this.setState({ nivelOk: 'Bom' })
    } else {
      this.setState({ nivelOk: 'Ruim' })
    }
    this.ligaRepositor()
  }

  async ligaRepositor () {
    if (this.state.nivelOk === 'Ruim') {
      await axios.post('/relay', {
        toggle: true,
        tipoComponente: 'Repositor'
      })
    } else {
      await axios.post('/relay', {
        toggle: false,
        tipoComponente: 'Repositor'
      })
    }
  }

  render () {
    const color = this.state.nivelOk === 'Bom' ? '#24D340' : '#EC1111'
    const style = {
      color
    }
    return (
      <NivelAguaStyle>
        Nivel de água: <span style={style}>{`${this.state.nivelOk}`}</span>
      </NivelAguaStyle>
    )
  }
}
