import style from 'styled-components'

const ControlesStyle = style.div`
  width: 100%;
  height: 228px;

  ul {
    display:grid;
    grid-template-columns: 1fr 1fr
    padding: 0 60px;
    margin:0;

    li {
      margin: 5px 0;
      list-style-type:none;
      align-self: center;
      justify-self: end;
    }

  }
`
export default ControlesStyle
