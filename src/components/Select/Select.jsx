import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Selection = ({value,setValue,options,defaultValue}) => {
    return (
        <div>
           <div>      
                <FormControl variant="filled" sx={{ m: 3, minWidth: 400}}>
                    <InputLabel>{defaultValue}</InputLabel>
                    <Select
                        value={value}
                        onChange={(e)=>setValue(e.target.value)}                       
                    >
                        {options.map(option=>(
                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            {/* <select value={value} onChange={(e)=>setValue(e.target.value)}>
                <option>
                    {defaultValue}
                </option>
                {options.map(option=>(
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select> */}
        </div>
    )
}

export default Selection