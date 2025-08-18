import React from 'react'

import style from './headline.module.scss'

const Headline = () => {
  return (
    <div className={ style.headlineContainer }>
    	<h3 className={ style.title }>Assembly: Endgame</h3>
    	<p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
    </div>
  )
}

export { Headline }