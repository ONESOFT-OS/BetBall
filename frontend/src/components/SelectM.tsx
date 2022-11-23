import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: "#FFF",
    border: '1px solid #ced4da',
    fontSize: 16,
    color: '#000',
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    opacity: 0.6,
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#FFF',
      boxShadow: '0 0 0 0.2rem rgba(0,123,100,.25)',
    },
  },
}));

export interface SelectProps{
  children: ReactNode
  defaultText: string
}

export function SelectM(props:SelectProps) {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 250  }}>
        <InputLabel id="demo-simple-select-autowidth-label" color='success' >{props.defaultText}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Método"
          input={<BootstrapInput />}
        >
          {props.children}
        </Select>
      </FormControl>
    </div>
  );
}