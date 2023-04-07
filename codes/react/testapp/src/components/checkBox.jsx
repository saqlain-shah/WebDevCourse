import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import './App.css';

export default function CheckboxesGroup() {
  const [state, setState] = React.useState({
    tehzeeb: false,
    shehbaz: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { tehzeeb,shehbaz } = state;
  const error = [tehzeeb,shehbaz].filter((v) => v).length !== 1;

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={tehzeeb} onChange={handleChange} name="tehzeeb" />
            }
            label="Tehzeeb"
          />
                    <FormControlLabel
            control={
              <Checkbox checked={shehbaz} onChange={handleChange} name="shehbaz" />
            }
            label="Shehbaz"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
      <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
        <FormLabel component="legend">Pick two</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={shehbaz} onChange={handleChange} name="shehbaz" />
            }
            label="tehzeeb"
          />
          
          <FormControlLabel
            control={
              <Checkbox checked={tehzeeb} onChange={handleChange} name="tehzeeb" />
            }
            label="ShehbaZ"
          />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl>
    </Box>
  );
}