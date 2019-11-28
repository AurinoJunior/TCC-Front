import style from 'styled-components'

const TopoStyle = style.div`
  display: grid
  height: 70px;
  width: 100%;
  border-bottom: 1px solid black;

  .HD {
    grid-area: horaData;
  }

  .botaoConfig {
    grid-area: botaoConfig;
  }

  .temperatura {
    grid-area: temperatura;
  }

  .nivelAgua {
    grid-area: nivelAgua;
  }

  .camera {
    grid-area: camera;
  }

  grid-template-areas:
    "horaData botaoConfig botaoConfig"
    "temperatura nivelAgua camera"
  ;

  .botaoConfig {
    justify-self: end;
  }
`

export default TopoStyle
