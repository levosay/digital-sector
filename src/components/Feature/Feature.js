import React from 'react'
import feature1 from '../../img/feature/feature_1.svg'
import feature2 from '../../img/feature/feature_2.svg'
import feature3 from '../../img/feature/feature_3.svg'
import './Feature.sass'

const Feature = () => {
  return (
    <div className="feature">
      <img className="feature__img" src={feature1} alt="RECYCLED PVC 100%"/>
      <img className="feature__img" src={feature2} alt="LIMITED EDITION 20210"/>
      <img className="feature__img" src={feature3} alt="BOY FRIEND FIT"/>
    </div>
  )
}

export default Feature
