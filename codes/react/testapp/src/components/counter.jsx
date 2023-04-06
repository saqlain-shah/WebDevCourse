import { useState } from "react"
import Button from '@mui/material/Button';

export default function MyButton() {
    const [count, setCount] = useState(0);
    // return (
    //     <div className="App">
    //      <h1>This is Counter App</h1>
    //              <Button variant="contained" onClick={() => setCount(count + 1)}>+</Button>
    //      <div id="counter-value">{count}</div>
    //      <Button variant="contained" onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</Button>
    //     </div>
    //   );




    // function handleClick() {
    //   setCount(count + 1);
    // }
    function counterIncrease(){
        setCount(count+1);
    }
    function counterDecrease(){
        if (count > 0){
       setCount(count-1);
            }    }
  
    return (
        <>
        <Button variant="contained" onClick={counterIncrease}>+</Button>
        {count}
      <Button variant="contained" onClick={counterDecrease}>-</Button>
   
        </>
        

    // //   {/* <button onClick={handleClick}>
    // //     Clicked {count} times
    // //   </button> */}
    );
  }