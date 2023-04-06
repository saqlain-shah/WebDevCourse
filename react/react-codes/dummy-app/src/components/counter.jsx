import { useState } from "react"
import Button from '@mui/material/Button';


export default function MyButton() {
    const [count, setCount] = useState(0);

    function counterIncrease() {
        setCount(count + 1);
        alert(count)
    }

    function counterDecrease() {
        setCount(count - 1);
        alert(count)
    }
    return (
        <>
            <Button variant="outlined" onClick={counterDecrease} >-</Button>

            {count}
            <Button variant="outlined" onClick={counterIncrease}>+</Button>

        </>

    );
}
