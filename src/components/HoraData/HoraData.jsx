import React, { Component } from 'react'

import HoraDataStyle from './HoraDataStyle'

export default class HoraData extends Component {
  state = {
    data: '25/11/2019',
    hora: '11:01'
  }

  render () {
    return (
      <HoraDataStyle>
        <span>{this.state.hora}</span>{` ${this.state.data}`}
      </HoraDataStyle>
    )
  }
}
