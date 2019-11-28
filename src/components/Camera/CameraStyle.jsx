import style from 'styled-components'

const CameraStyle = style.div`
  justify-self: end;
  align-self: end;

  .react-cam{
    position: absolute;
    top:0;
    left:0;
    z-index: 100;
  }

  button {
    position: absolute;
    top:0;
    left:0;
    z-index:110;
  }

  img {
    width: 24px;
    height: 24px;
  }
`

export default CameraStyle
