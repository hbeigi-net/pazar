import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth({
    title, 
    items, 
    initial,
    onChange
}) {
  const [select, setSelect] = React.useState(initial || items[0]);

  const handleChange = (event) => {
    if(onChange) onChange(event.target.value)
    setSelect(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ border: 'unset !important', outline: 'unset !important'}} size='small'  >
        <Select
        
          style={{ color: 'white', height: '40px', '&:hover': {border:"unset",outline: 'unset' }}}
          value={select}
          onChange={handleChange}
          autoWidth
        >
            {
                items.map((item) => {
                    return (
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                    )
                })
            }
        </Select>
      </FormControl>
    </div>
  );
}