import React, {useState} from 'react'
import dataSlider from './dataSlider'
import './slider.css'
import manePants from '../../img/pants/pants_1.png'


const Slider = () => {
  const [pants, setPants] = useState(false)

  const togglePants = (item) => {
    setPants(item)
  }

  return (
    <div className="slider">
      <div className="slider__demonstration">
        <img
          className="demonstration__img"
          src={pants ? pants.url : manePants}
          alt={ pants ? pants.title : 'XS'}
        />
      </div>
      <div className="slider__footer">
        {
          dataSlider.map(item => (
            <div className="list-wrapper">
              <img
                className="list-wrapper__img"
                key={item.id}
                src={item.url}
                alt={item.title}
                onMouseEnter={() => togglePants(item)}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Slider
