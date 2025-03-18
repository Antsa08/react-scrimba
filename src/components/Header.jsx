import React from 'react'
import chefClaude from '../assets/chef-claude.svg'

import styles from './header.module.scss'

export const Header = () => {
  return (
    <header>
    	<nav>
    		<img className={ styles.logo } src={ chefClaude } alt="chef claude" />
    		<a href="#" title="Chef Claude">Chef Claude</a>
    	</nav>
    </header>
  )
}