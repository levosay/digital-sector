import React from 'react'
import favoriteIcon from '../../img/icon/favoriteInBtn.svg'
import favoriteIconOn from '../../img/icon/favorite-icon-btn-on.svg'
import '../../fonts/styleFonts.css'
import './button.sass'

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
        className="button__icon"
        src={favorite ? favoriteIconOn : favoriteIcon}
        alt="favorite"
        onClick={() => setFavorite(prev => !prev)}
      />
    </div>
  )
}

export default Button
