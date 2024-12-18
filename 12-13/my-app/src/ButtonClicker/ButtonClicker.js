import { useRef } from "react";
import Textbox from "./Textbox";

const ButtonClicker = () => {
    const clickCount = useRef(0);

    const handleClick = () => {
        clickCount.current += 1;
        alert(`Button clicked ${clickCount.current} times.`);
    };

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
            <br/>
            <Textbox/>
        </div>
    );
};

export default ButtonClicker;
