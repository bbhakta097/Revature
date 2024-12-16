import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">
            <h2>The React Demos</h2>
            <div className="links">
                <Link to="/Hello">Hello</Link>
                <Link to="/stateDemo">StateDemo</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/ToDoList">To Do's</Link>
                <Link to="/eventsDemo">Events</Link>
                <Link to="/ListnKeys/ListAndKeysComponent">List and Keys</Link>
                <Link to="/AxiosDemo/axiosgetDemo">Axios Demo</Link>
                <Link to="/AxiosCrudOps/AxiosDisplay">Axios Crud Operations</Link>
            </div>
        </div>
    );
}

export default Navbar;