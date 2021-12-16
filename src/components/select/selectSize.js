import React, {useState} from 'react'
import './selectSize.css'
import arrowSelectOpen from '../../img/icon/arrow-select-open.svg'
import arrowSelectClose from '../../img/icon/arrow-select-close.svg'
import dataSelect from './dataSelect'


const SelectSize = () => {
  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState(false)



  // const selectGoods = (value) => {
  //   setSelect(value)
  //   setOpen(prev => !prev)
  // }
  //
  // const selectOpen = () => {
  //   // document.querySelector('.select__option-mane').style = "display: none"
  //
  //   setSelect('Размер: S')
  //   setOpen(prev => !prev)
  // }
  const openSelect = (value) => {
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
          dataSelect.map(item => (
            <li
              key={item.id}
              className="select__option"
              data-size={item.title}
              onClick={(event) => openSelect(event.target.innerText)}
            >
              {item.title}
            </li>
          )) :
          (
          <li
            className="select__option select__option-mane"
            data-size={select ? select : dataSelect[0].size}
            onClick={(event) => openSelect(event.target.innerText)}
          >
            {select ? select : dataSelect[0].title}
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
