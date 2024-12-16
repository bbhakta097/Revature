import { useState } from "react";

const StateDemo=()=>{
    //let name  = "Bhumik";

    const [name, setName] = useState("Bhumik");
    const [age, setAge] = useState("23");
    const [time, setWhen] = useState(11012000);


    const changeName=(newName, age, time)=>{
        setName(newName);
        setAge(age);
        setWhen(time);
    }

    return(
        <>
        <h2>{name} is {age} years old on {time}</h2>
        <button onClick={() => changeName("Bhakta", 24, 11012001)}> Click me</button>
        </>
    );
}

export default StateDemo;
