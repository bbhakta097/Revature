import { useState } from "react";
import ListShow from "./ListShow";
import ListAdd from "./ListAdd";
import ListCount from "./ListCount";

const ToDoList = () => {

    const[list, setList] = useState([]);

    return(
    
        <div>
            <h2>To Do List: </h2>
            <br/>
            <ListShow list={list}/>
            <ListAdd setList={setList}/>
            <ListCount list={list}/>
        </div>
    );
}

export default ToDoList;