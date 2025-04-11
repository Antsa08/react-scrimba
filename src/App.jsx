import React from 'react'

import { Pads } from './components/Pads'

import padsData from './assets/pads.js'

import './App.css'

function App(props) {

  const dkMode = props.darkmode ? '#222' : '#000'

  const [pads, setPads] = React.useState(padsData)

    const padElement = pads.map( pad => {
      return (<Pads
        key={ pad.id }
        color={ pad.color }
        on={ pad.on }
      />)
    }
  )

  return (
    <div className="pad-container" style={ { backgroundColor:  dkMode } }>
      { padElement }
    </div>
  )
}

export default App
