import myContext from "../contextDemo/myContext";
import TextComponent from "../hoc/TextComponent";
import { useContext } from "react";

const Hello = (props) => {
    const theData = useContext(myContext);
    return(
        <>
            <h2>Hello Functional Component</h2>
            <p>Hello World from Hello Compon....... {props.name}</p>
            <hr/>
            <TextComponent/>
            <h2> Data From Context ::: {theData}</h2>

        </>
        );
};

export default Hello;