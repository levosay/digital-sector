import React, {useEffect} from 'react'
import dataSlider from './dataSlider'
import {Carousel} from 'react-responsive-carousel'
import { isDesktop, isTablet, isMobileOnly} from 'react-device-detect'
import './slider.css'

const Slider = () => {

  const carouselProps = () => ({
    showArrows: false,
    infiniteLoop: true,
    swipeScrollTolerance: 20,
    showStatus: false,
    showThumbs: isDesktop || isTablet,
    showIndicators: isMobileOnly,
    thumbWidth: 67,
    emulateTouch: true
  })

  useEffect(() => {
    document.querySelector('.thumbs')
      .addEventListener('mouseover', dispatcherEvent)
    return () => {
      document.querySelector('.thumbs')
        .removeEventListener('mouseover', dispatcherEvent)
    }
  }, [])

  const dispatcherEvent = (event) => {
    if (event.target.className === 'thumb') {
      event.target.click()
    }
  }

  return (
    <div className="slider">
      <Carousel {...carouselProps()}>
        {dataSlider.map(item => (
          <img
            key={item.id}
            className="slide__img"
            src={item.url}
            alt={item.title}
          />
        ))}
      </Carousel>
    </div>
  )
}

export default Slider
