import React, {useState} from 'react'
import Button from '../btn/button'
import SelectSize from '../select/selectSize'
import returnIcon from '../../img/icon/return.svg'
import './description.css'
import IconSize from '../iconSize/iconSize'
import favoriteIcon from '../../img/icon/favorite.svg'

const Description = ({dataSize, setDataSize}) => {
  const [favorite, setFavorite] = useState(false)

  return (
    <div className="description">
      <div className="description__head">
        <img className="description__icon-return" src={returnIcon} alt="Back"/>
        <h1 className="description__title">Пиджак CLASP</h1>
        <span className="description__sum">27000 руб.</span>
      </div>
      <div className="description__select-wrapper">
        <SelectSize
          dataSize={dataSize}
          setDataSize={setDataSize}
        />
        <Button>в корзину</Button>

      </div>
      <div className="description__size-wrapper">
        <IconSize
          dataSize={dataSize}
        />
        <a className="description__size-link" href="#">Как выбрать размер?</a>
      </div>
      <div className="description__info">
        <p className="info-text">Безупречный пиджак с мужского плеча, на шелковой подкладке с ассиметричным поясом, подчеркивающим талию Прекрасно комбинируется с остальными изделиями из коллекции.</p>
        <p className="info-text">Сочетайте с кожаным топом и брюками для рабочего дня в офисе, или же предайте образу дерзости, остановив его в расстегнутом виде</p>
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
