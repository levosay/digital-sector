import React from 'react'
import favoriteIcon from '../../img/icon/favoriteInBtn.svg'
import './button.css'

const Button = ({onClick, favorite, setFavorite, children}) => {
  return (
    <div className="button">
      <button
        className="button__btn"
        onClick={onClick}
      >
        {children}
      </button>
      <img
        className={favorite ? "button__icon favIconOn" : "button__icon" +
          " favIconOff"}
        src={favoriteIcon}
        alt="favorite"
        onClick={() => setFavorite(prev => !prev)}
      />
    </div>
  )
}

export default Button
