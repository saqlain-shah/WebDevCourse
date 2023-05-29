import react,{ useState } from "react" 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { alignProperty } from "@mui/material/styles/cssUtils";

export default function BoxSx() {
const [result,setResult]=useState(" ");
const clickHandler=event=>{
  setResult(result.concat(event.target.value))
}
const ClearDisplay=()=>{
setResult("");
}
const calculate=()=>{
  setResult(eval(result).toString());
}
  return (
    <Box
      sx={{
        width: 195,
        height: 310,
        backgroundColor: 'primary.dark'
    
      }}
    >
   
   <TextField fullWidth  id="fullWidth" value={result} style={{
        backgroundColor: "silver"
    
    }}/>

    <Button variant="contained" size="large" color="success" value ='9' onClick={clickHandler}>9</Button>
    <Button variant="contained" size="large" color="success" value ='8' onClick={clickHandler}>8</Button>
    <Button variant="contained" size="large" color="success" value ='7' onClick={clickHandler}>7</Button>
    <Button variant="contained" size="large" color="success" value ='6' onClick={clickHandler}>6</Button>
    <Button variant="contained" size="large" color="success" value ='5' onClick={clickHandler}>5</Button>
    <Button variant="contained" size="large" color="success" value ='4' onClick={clickHandler}>4</Button>
    <Button variant="contained" size="large" color="success" value ='3' onClick={clickHandler}>3</Button>
    <Button variant="contained" size="large" color="success" value ='2' onClick={clickHandler}>2</Button>
    <Button variant="contained" size="large" color="success" value ='1' onClick={clickHandler}>1</Button>
    <Button variant="contained" size="large" color="success" value ='1' onClick={clickHandler}>0</Button>
    <Button variant="contained" size="large" color="success" value ='.' onClick={clickHandler}>.</Button>
    <Button variant="contained" size="large" color="success" value ='+' onClick={clickHandler}>+</Button>
    <Button variant="contained" size="large" color="success" value ='-' onClick={clickHandler}>-</Button>
    <Button variant="contained" size="large" color="success" value ='*' onClick={clickHandler}>*</Button>
    <Button variant="contained" size="large" color="success" value ='/' onClick={clickHandler}>/</Button>
    <Button variant="contained" size="large" color="success" value ='%' onClick={clickHandler}>%</Button>
    <Button variant="contained" size="large" color="success" onClick={ClearDisplay}>C</Button>
    <Button variant="contained" size="large" color="success" onClick={calculate}>=</Button>
    </Box>
);
}