import { useState } from "react";
const Counter = () =>{

    const [counter, setCounter] = useState(0);

    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);

    return(
        <>
        <button data-testid="increment" onClick={increment}>Increment</button>
        <h3 data-testid="counter">{counter}</h3>
        <button data-testid="decrement" onClick={decrement}>Decrement</button>
        </>
    )
}

export default Counter;