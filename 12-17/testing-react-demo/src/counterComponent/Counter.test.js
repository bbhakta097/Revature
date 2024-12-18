import Counter from "./Counter"
import { fireEvent, render, screen } from "@testing-library/react"

test('Testing the increment Counter', ()=>{
    render(<Counter/>)

    const counter = screen.getByTestId("counter");
    const incrementBtn = screen.getByTestId("increment");
    //const decrementBtn = screen.getByTestId("decrement");

    fireEvent.click(incrementBtn);
    //fireEvent.click(decrementBtn);
    
    expect(counter).toHaveTextContent("1");
    

})

test('Testing the decrement Counter', ()=>{
    render(<Counter/>)

    const counter = screen.getByTestId("counter");
    //const incrementBtn = screen.getByTestId("increment");
    const decrementBtn = screen.getByTestId("decrement");

    //fireEvent.click(incrementBtn);
    fireEvent.click(decrementBtn);
    
    expect(counter).toHaveTextContent("-1");
    

})