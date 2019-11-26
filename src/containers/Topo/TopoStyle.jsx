import style from 'styled-components'

const TopoStyle = style.div`
  display: grid
  grid-template-columns: 1fr 1fr;
  height: 70px;
  width: 100%;
  border-bottom: 1px solid black;

  a {
    justify-self: end;
  }
`

export default TopoStyle
