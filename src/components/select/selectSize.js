import React, {useState} from 'react'
import './selectSize.css'
import arrowSelectOpen from '../../img/icon/arrow-select-open.svg'
import arrowSelectClose from '../../img/icon/arrow-select-close.svg'

const SelectSize = () => {
  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState('Размер: S')

  const selectGoods = (value) => {
    setSelect(value)
    setOpen(prev => !prev)
  }

  return (
    <div className="select">
      {
        !open ? (
          <span
            className="select__option select__option-mane"
            onClick={() => setOpen(prev => !prev)}
          >
            {select}
          </span>
        )
          : null
      }
      <img
        className="select__img"
        src={open ? arrowSelectOpen : arrowSelectClose}
        alt="3123"
        onClick={() => setOpen(prev => !prev)}
      />
      {
        open ? (
          <ul className="select-list">
            <li
              onClick={(event) => selectGoods(event.target.innerText)}
              className="select__option"
            >Размер: S
            </li>
            <li
              onClick={(event) => selectGoods(event.target.innerText)}
              className="select__option"
            >Размер: M
            </li>
            <li
              onClick={(event) => selectGoods(event.target.innerText)}
              className="select__option"
            >Размер: L
            </li>
          </ul>
        )
          : null
      }
    </div>
  )
}

export default SelectSize
