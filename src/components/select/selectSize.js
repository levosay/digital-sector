import React, {useState} from 'react'
import './selectSize.css'
import arrowSelectOpen from '../../img/icon/arrow-select-open.svg'
import arrowSelectClose from '../../img/icon/arrow-select-close.svg'


const SelectSize = ({dataSize}) => {
  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState(false)

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
          dataSize.map(item => (
            item.active ? (
              <li
                key={item.id}
                className="select__option"
                data-size={item.title}
                onClick={() => openSelect(item.title)}
              >
                {item.title}
              </li>
            ) : null
          )) :
          (
          <li
            className="select__option select__option-mane"
            data-size={select ? select : dataSize[0].title}
            onClick={() => openSelect(dataSize[0].title)}
          >
            {select ? select : dataSize[0].title}
          </li>
          )}
      </ul>
    </div>
  )
}

export default SelectSize
