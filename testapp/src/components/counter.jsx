import { useState } from "react";
import Button from '@mui/material/Button';
export default function MyButton() {
  function cal(){
const a=document.getElementById("a").value;
const b=document.getElementById("b").value;


  }
    const [count, setCount] = useState(0);
  
    function counterIncrease() {
      setCount(count + 1);
      console.log(count)
    }
    function counterDecrease() {
        setCount(count - 1);
        if (count==0){
            setCount(count)
        }
        console.log(count)
      }
  
    return (
      <>
        <div>
<Button variant="outlined" color="error" onClick={counterIncrease}>+</Button>
<Button variant="contained" color="success" onClick={counterDecrease}>-</Button>
<div class="cat">

{count}
</div>
  </div>
  <div class="box">
    <div class="smallbox">
      

    </div>
    <button class="btnsize">
  1
    </button>
    <button class="btnsize">
  2
    </button>
    <button class="btnsize">
  3
    </button>
    <button class="btnsize">
  4
    </button>
    <button class="btnsize">
  5
    </button>
    <button class="btnsize">
  6
    </button>
    <button class="btnsize">
  7
    </button>
    <button class="btnsize">
  8
    </button>
    <button class="btnsize">
  9
    </button>
    <button class="btnsize">
  0
    </button>
    <button class="btnsize">
  +
    </button>
    <button class="btnsize">
  -
    </button>
    <button class="btnsize">
  x
    </button>
    <button class="btnsize">
  %
    </button>
    <button class="btnsize">
  &
    </button>
    <button class="btnsize">
  =
    </button>

  </div>
  
  </>
      
    );
  }

