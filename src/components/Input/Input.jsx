import TextField from '@mui/material/TextField';
import React from 'react'
// import './Input.css'


const Input = ({errorText,value,onChange,placeholder}) => {
  const condition=value!=='' && value.length<3
  return (
   
      <div className='w-full p-4'>
        <TextField
          error={condition?true:false} 
          label={placeholder} 
          variant="filled" 
          onChange={onChange} 
          value={value}  
          sx={{width:'100%'}} 
          color='warning'
          minLength={3} 
           
        />
        <div className='error-text'>{condition?errorText:''}</div>
        
      </div>
    
    
  )
}

export default Input