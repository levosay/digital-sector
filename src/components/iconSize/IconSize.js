import React from 'react'
import '../../fonts/styleFonts.css'
import './iconSize.css'

const IconSize = ({dataSize}) => {
  return (
    <div className="size-icon">
      {dataSize.sort((a,b) => (a.active > b.active) ? 1 : ((b.active > a.active) ? -1 : 0))
        .map(item => (
        <div
          key={item.id}
          className="size-icon-wrapper"
        >
          <div className="size-icon__line"/>
          <span
            key={item.id}
            className={item.active ? "away size-icon__icon" : "stock size-icon__icon"}
            data-size={item.title}
          >
            {item.size}
          </span>
        </div>
      ))}
    </div>
  )
}

export default IconSize
