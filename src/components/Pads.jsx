import React from 'react'

export const Pads = ({ key, id, color, toggle, isOn }) => {

  console.log(key)

  return (
    <button
    	onClick={ () => toggle(id) }
    	className={ isOn ? 'on' : undefined }
			style={{ backgroundColor: color }}>
		</button>
  )
}