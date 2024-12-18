import { useState } from "react";

const Textbox = () => {

    const [text, setText] = useState(""); 

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return ( 
        <div>
            <br/>
            <h2>Text:</h2>
            <h3>{text}</h3>
            <br/>
            <input
                type="text" 
                value={text} 
                onChange={handleChange}
            />
            
        </div>
     );
}
 
export default Textbox;