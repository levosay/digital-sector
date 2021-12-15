import React from 'react'
import dataSlider from './dataSlider'


//          <img key={item.id} src={item.url} alt={item.title}>

const Slider = () => {
  return (
    <div>
      {
        dataSlider.map(item => (
          <img key={item.id} src={item.url} alt={item.title} />
        ))
      }
    </div>
  )
}

export default Slider
