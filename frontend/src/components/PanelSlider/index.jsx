import React, {useState, useEffect} from 'react'

export const Slider = ({children, displayIndex = 0}) => {
  
  return (
    <div className='slider-display'>
      {children}
    </div>
  )
}

export const SliderItem = ({children,  displayIndex = 0}) => {
  return (
    <div className='slider-item'>
      {children}
    </div>
  )
}

