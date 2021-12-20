import React, {useState} from 'react'
import Btn from '../Btn/Btn'
import SelectSize from '../SelectSize/SelectSize'
import IconSize from '../IconSize/IconSize'
import returnIcon from '../../img/icon/return.svg'
import favoriteIcon from '../../img/icon/favorite.svg'
import './Description.sass'

const Description = ({dataSize, setDataSize}) => {
  const [favorite, setFavorite] = useState(false)

  return (
    <div className="description">

      <div className="description__head">
        <img className="description__icon-return" src={returnIcon} alt="Back"/>
        <h1 className="description__title">Пиджак CLASP</h1>
        <span className="description__sum">27 000 руб.</span>
      </div>

      <div className="description__select-wrapper">
        <SelectSize
          dataSize={dataSize}
          setDataSize={setDataSize}
        />
        <Btn
          favorite={favorite}
          setFavorite={setFavorite}
        >
          в корзину
        </Btn>
      </div>

      <div className="description__size-wrapper">
        <IconSize
          dataSize={dataSize}
        />
        <a className="description__size-link" href="#">Как выбрать размер?</a>
      </div>

      <div
        className={
          favorite
            ? "select-section-wrapper toFavorite"
            : "select-section-wrapper removeFavorite"
        }
        onClick={() => setFavorite(prev => !prev)}
      >
        <img
          className="select-section__icon"
          src={favoriteIcon}
          alt="Add Favorite"
        />
      </div>

    </div>
  )
}

export default Description
