import React from 'react'
import iconHome from '../../img/icon/home.svg'
import iconArrowNext from '../../img/icon/arrow-next.svg'
import './bread-crumbs.css'

const BreadCrumbs = () => {
  return (
    <div className="bread-crumbs">
      <a className="bread-crumbs__link bread-crumbs__link-home" href="#">
        <img className="bread-crumbs__img" src={iconHome} alt="Home"/>
      </a>
      <a className="bread-crumbs__link bread-crumbs__link-next" href="#">
        <img className="bread-crumbs__img" src={iconArrowNext} alt="Next"/>
      </a>
      <a className="bread-crumbs__crumb-link" href="#">брюки</a>
      <a className="bread-crumbs__link bread-crumbs__link-next" href="#">
        <img className="bread-crumbs__img" src={iconArrowNext} alt="Next"/>
      </a>
    </div>
  )
}

export default BreadCrumbs
