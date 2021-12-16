import React, {useEffect} from 'react'
import './iconSize.css'

const IconSize = ({dataSize}) => {

  return (
    <div className="size-icon">
      {dataSize.map(item => (
        <div className="size-icon-wrapper">
          <div className="size-icon__line"></div>
          <span
            key={item.id}
            className={item.active ? "stock size-icon__icon" : "away size-icon__icon"}
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
