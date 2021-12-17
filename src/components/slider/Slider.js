import React, {useState} from 'react'
import dataSlider from './dataSlider'
import manePants from '../../img/pants/pants_1.png'
import './slider.css'

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
            <div
              key={item.id}
              className="list-wrapper"
              onMouseEnter={() => togglePants(item)}
            >
              <img
                className="list-wrapper__img"
                src={item.url}
                alt={item.title}
              />
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Slider
