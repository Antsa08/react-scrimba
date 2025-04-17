import React from 'react'

import { Pads } from './components/Pads'

import padsData from './assets/pads.js'

import './App.css'

function App(props) {

  const dkMode = props.darkmode ? '#222' : '#000'

  const [pads, setPads] = React.useState(padsData)

  function toggle(id) {
    setPads(prevPads => prevPads.map(item => {
      return item.id === id ? { ...item, on: !item.on } : item
    }))
  }

    const padElement = pads.map( pad => {
      return (<Pads
        key={ pad.id }
        id={ pad.id }
        color={ pad.color }
        toggle={ toggle }
        isOn={ pad.on }
      />)
    }
  )

  return (
    <div className="pad-container" style={ { backgroundColor: dkMode } }>
      { padElement }
    </div>
  )
}

export default App
