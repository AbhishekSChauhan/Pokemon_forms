import React from 'react'
import Input from '../Input/Input'

const Form = ({name,setName,codeName,setCodeName,handleSubmit}) => {

    return (
        <form >
            <Input type='text' 
                value={name} 
                onChange={(e)=>setName(e.target.value)}
                placeholder='Full Name'
                errorText={"We know that's not yo name!!"}
                
            />
            <Input 
                type='text' 
                value={codeName} 
                onChange={(e)=>setCodeName(e.target.value)} 
                placeholder='Code Name' 
                errorText={"We know that's not yo code name!!"}
            />
        </form>
    )
}

export default Form