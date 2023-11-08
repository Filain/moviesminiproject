import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import {ChangeEvent, useState} from "react";


const ThemSwicher = () => {
    const [checking, setChecking] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecking(event.target.checked);
        if (!checking) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    };
    return (
        <FormControlLabel
            control={<Switch
                checked={checking}
                onChange={handleChange}
                color="default"
                inputProps={{'aria-label': 'controlled'}}
            />}
            label="Mode"
            labelPlacement="start"
        />
    );
};

export {ThemSwicher};
