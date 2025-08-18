import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Headline } from './components/Headline'
import { Notice } from './components/Notice'
import { Eliminations } from './components/Eliminations'
import { Keyboard } from './components/Keyboard'
import { Letters } from './components/Letters'

function App() {

  return (
    <div className="container">
      <section className="head-group">
        <Headline />
        <Notice />
      </section>
      <Eliminations />
      <Letters />
      <Keyboard />
    </div>
  )
}

export default App
