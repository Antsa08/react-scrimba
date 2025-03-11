import Jokes from './components/Jokes'

import jokesData from './assets/jokesData.js'

function App() {

  const jokesComponent = jokesData.map(function(joke) {
    return (<Jokes setup={joke.setup} punchline={joke.punchline} />)
  });

  return (
    <>
      { jokesComponent }
    </>
  )
}

export default App
