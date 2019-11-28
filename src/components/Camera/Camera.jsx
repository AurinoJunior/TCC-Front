import React, { Component } from 'react'
import ReactCam from 'react-webcam'

import CameraStyle from './CameraStyle'

class Camera extends Component {
  constructor (props) {
    super(props)
    this.shouldShowCamera = this.shouldShowCamera.bind(this)
    this.shouldHideCamera = this.shouldHideCamera.bind(this)
  }

  state = {
    showCam: false
  }

  componentDidMount () {
    this.setState({ showCam: false })
  }

  shouldShowCamera () {
    this.setState({ showCam: true })
  }

  shouldHideCamera () {
    this.setState({ showCam: false })
  }

  render () {
    const camera = this.state.showCam
    return (
      <CameraStyle>
        <img src="/image/camera.png" alt="camera" onClick={this.shouldShowCamera} />
        {camera && (
          <>
            <ReactCam
              className="react-cam"
              audio={false}
              height={320}
              width={480}
            />
            <button onClick={this.shouldHideCamera}>X</button>
          </>
        )}
      </CameraStyle>
    )
  }
}

export default Camera
