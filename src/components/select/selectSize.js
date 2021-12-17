import React, {useState} from 'react'
import arrowSelectOpen from '../../img/icon/arrow-select-open.svg'
import arrowSelectClose from '../../img/icon/arrow-select-close.svg'
import './selectSize.css'

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
        onClick={() => setOpen(prev => !prev)}
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
          >
            {select}
          </li>
          )}
      </ul>
    </div>
  )
}

export default SelectSize
