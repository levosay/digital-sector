import React, {useState} from 'react'
import './selectSize.css'
import arrowSelectOpen from '../../img/icon/arrow-select-open.svg'
import arrowSelectClose from '../../img/icon/arrow-select-close.svg'
import dataSelect from './dataSelect'


const SelectSize = ({dataSize, setDataSize}) => {
  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState(false)

  const openSelect = (value) => {
    if (open) {
      const newDataSelect = dataSelect.map(item => {
        return {
          ...item,
          active: item.title === value
        }
      });

      setDataSize(newDataSelect)
    }
    setSelect(value)
    setOpen(prev => !prev)
  }

  return (
    <div className="select">
      <img
        className="select__img"
        src={open ? arrowSelectOpen : arrowSelectClose}
        alt={open ? 'open' : 'close'}
      />
      <ul className="select-list">
        {open
          ?
          dataSize.map(item => (
            <li
              key={item.id}
              className="select__option"
              data-size={item.title}
              onClick={() => openSelect(item.title)}
            >
              {item.title}
            </li>
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

      {/*<span*/}
      {/*  className="select__option select__option-mane"*/}
      {/*  onClick={selectOpen}*/}
      {/*>*/}
      {/*  {select ? select : 'Размер: S'}*/}
      {/*</span>*/}
      {/*<img*/}
      {/*  className="select__img"*/}
      {/*  src={open ? arrowSelectOpen : arrowSelectClose}*/}
      {/*  alt={open ? 'open' : 'close'}*/}
      {/*  onClick={selectOpen}*/}
      {/*/>*/}
      {/*{*/}
      {/*  open ? (*/}
      {/*    <ul className="select-list">*/}
      {/*      <li*/}
      {/*        className="select__option"*/}
      {/*        onClick={(event) => selectGoods(event.target.innerText)}*/}
      {/*      >*/}
      {/*        Размер: M*/}
      {/*      </li>*/}
      {/*      <li*/}
      {/*        className="select__option"*/}
      {/*        onClick={(event) => selectGoods(event.target.innerText)}*/}
      {/*      >*/}
      {/*        Размер: L*/}
      {/*      </li>*/}
      {/*    </ul>*/}
      {/*  )*/}
      {/*    : null*/}
      {/*}*/}
    </div>
  )
}

export default SelectSize
