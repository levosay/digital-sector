import React from 'react'
import iconHome from '../../img/icon/home.svg'
import iconArrowNext from '../../img/icon/arrow-next.svg'

const BreadCrumbs = () => {
  return (
    <div>
      <img src={iconHome} alt="HOME"/>
      <img src={iconArrowNext} alt="NEXT"/>
      <span>брюки</span>
      <img src={iconArrowNext} alt="NEXT"/>
    </div>
  )
}

export default BreadCrumbs
