import { useState } from "react";

const ListAdd = ({ setList }) => {
    const [value, setValue] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        setList((prevList) => [...prevList, value]);
        setValue("");
    };

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit">ADD</button>
        </form>
    );
};

export default ListAdd;
