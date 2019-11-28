import React, { Component } from 'react'
import Moment from 'moment'
import 'moment/locale/pt-br'

import HoraDataStyle from './HoraDataStyle'

export default class HoraData extends Component {
  state = {
    data: '',
    hora: ''
  }

  componentDidMount () {
    this.getHoraData()
  }

  componentDidUpdate () {
    this.hdTimer = setInterval(() => this.getHoraData(), 60000)
  }

  getHoraData () {
    const data = Moment().format('ll')
    const hora = Moment().format('LT')
    this.setState({ data, hora })
  }

  render () {
    return (
      <HoraDataStyle>
        <span>{this.state.hora}</span>{` ${this.state.data}`}
      </HoraDataStyle>
    )
  }
}
