import React from 'react'
import Button from '../btn/button'
import SelectSize from '../select/selectSize'
import returnIcon from '../../img/icon/return.svg'
import './description.css'
import IconSize from '../iconSize/iconSize'

const Description = ({dataSize, setDataSize}) => {
  return (
    <div>
      <img src={returnIcon} alt="Back"/>
      <h1>Пиджак CLASP</h1>
      <span>27000 руб.</span>
      <div>
        <Button>в корзину</Button>

        <SelectSize
          dataSize={dataSize}
          setDataSize={setDataSize}
        />
        <div>
          <img src="" alt=""/>
        </div>
      </div>
      <div>
        <IconSize
          dataSize={dataSize}
          setDataSize={setDataSize}
        />
        <span>Как выбрать размер?</span>
      </div>
      <div>
        <p>Безупречный пиджак с мужского плеча, на шелковой подкладке с ассиметричным поясом, подчеркивающим талию Прекрасно комбинируется с остальными изделиями из коллекции.</p>
        <p>Сочетайте с кожаным топом и брюками для рабочего дня в офисе, или же предайте образу дерзости, остановив его в расстегнутом виде</p>
      </div>
    </div>
  )
}

export default Description
