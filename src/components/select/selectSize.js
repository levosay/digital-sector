import React, {useState} from 'react'
import './selectSize.css'
import arrowSelectOpen from '../../img/icon/arrow-select-open.svg'
import arrowSelectClose from '../../img/icon/arrow-select-close.svg'


const SelectSize = ({dataSize}) => {
  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState(dataSize[0].title)

  const normalizedArray = dataSize.filter(item => item.active)

  const openSelect = (value) => {
    setSelect(value)
    setOpen(prev => !prev)
  }

  return (
    <div className="select">
      <img
        className="select__img"
        src={open ? arrowSelectClose : arrowSelectOpen}
        alt={open ? 'close' : 'open'}
      />
      <ul className="select-list">
        {open
          ?
          normalizedArray.map(item => (
            <li
              key={item.id}
              className="select__option"
              onClick={() => openSelect(item.title)}
            >
              {item.title}
            </li>
          )) :
          (
          <li
            className="select__option select__option-mane"
            onClick={() => setOpen(prev => !prev)}
            // onClick={() => openSelect(normalizedArray[0].title)}
          >
            {select}
          </li>
          )}
      </ul>
    </div>
  )
}

export default SelectSize
