import React from 'react'

export const Pads = ({ id, color, on }) => {

  const [isColor, setIsColor] = React.useState(on)

  function toggle() {
    setIsColor(prev => !prev)
  }

  return (
    <button
    	onClick={ toggle }
    	className={ isColor ? 'on' : undefined }
			style={{ backgroundColor: color }}>
		</button>
  )
}