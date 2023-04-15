import { useState } from "react";
import Button from '@mui/material/Button';
export default function MyButton() {
  const [count, setCount] = useState(0);

  function Increase() {
    setCount(count + 1);
  }
  function Decrease() {
    setCount(count - 1);
    if (count == 0) {
      setCount(0);
    }
  }

  return (

    <>
      <Button
       variant="contained" 
       color="success" 
       onClick={Increase} 
       > Increase</Button>
      <h1>DEC  {count}   INC</h1>

      <Button variant="outlined" color="error" onClick={Decrease}>Decrease</Button>




    </>
  );
}
