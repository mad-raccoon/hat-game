import {useEffect, useState} from "react";
import {TextField, ToggleButton, ToggleButtonGroup} from "@mui/material";
import './PaperInput.css';


const PaperInput = ({onChange}) => {
    const [value, setValue] = useState('')
    const [target, setTarget] = useState('solo')

    useEffect(() => {
        if (Boolean(value)) {
            onChange({value, target})
        }
    }, [value, target])

    return <div className='item'>
        <TextField fullWidth variant="outlined" label='E.g. do a lap dance'
                   onChange={(e) => setValue(e.target.value)}/>
        <ToggleButtonGroup

            color="primary"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
        >
            <ToggleButton value="solo">Solo</ToggleButton>
            <ToggleButton value="group">Group</ToggleButton>
        </ToggleButtonGroup>
    </div>
}

export default PaperInput;