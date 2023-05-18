import {useState} from "react";
import Button from '@mui/material/Button';
/*import './App.css';*/

export default function MyButton() {
 
    const [count, setCount] = useState(0);
  
    function countIncrease() {
      setCount(count + 1);
      if (count==10)
      setCount(count)
      console.log(count)
    }
    function countDecrease() {
        setCount(count -1);
        if(count==0){
            setCount(count)
            
        }
        console.log(count)
      }
    return (
    <div>
    <Button   variant="contained" color="success" onClick={countIncrease}>plus </Button>
      <Button variant="contained" color="error" onClick={countDecrease}>Subtract</Button>
      <p>{count}</p>
    </div>  
    )};
    