import React from 'react'

import starFilled from "/star-filled.png"
import starEmpty from "/star-empty.png"

export const Star = (props) => {
  const { toggleFavorite, isFavorite } = props
  return (
    <button
        onClick={toggleFavorite}
        aria-pressed={false}
        className="favorite-button"
    >
        <img
            src={isFavorite ? starEmpty : starFilled}
            alt="empty star icon"
            className="favorite"
        />
    </button>
  )
}