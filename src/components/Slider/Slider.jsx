import React from 'react'
import Slider from '@mui/material/Slider';
import './Slider.css'

const Slide = ({value,setValue,min,max}) => {

  return (
    <div className='slider' >
      <Slider
        size="small"
        aria-label="Default"
        valueLabelDisplay="auto"
        value={value} 
        onChange={(e)=>setValue(e.target.value)}
        min={min}
        max={max}
        style={{width:'390px',color: '#ff5349'}} 
      />
    </div>
  )
}

export default Slide