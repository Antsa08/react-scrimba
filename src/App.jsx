import { useState } from 'react'

import { Contact } from './components/Contact'

function App() {
  return (
    <>
      <Contact
          img="/public/images/mr-whiskerson.png"
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
      />
    </>
  )
}

export default App
