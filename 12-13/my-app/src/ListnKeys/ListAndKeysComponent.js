import Disp from "./commentDisplayComp";
const { useState, useEffect } = require("react")

const ListAndKeysComponent = () => {

    const [comments,setComments ] = useState([
        {
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
        },    
        {
            "id": 2,
            "name": "quo vero reiciendis velit similique earum",
            "email": "Jayne_Kuhic@sydney.com",
        },
        {
            "id": 3,
            "name": "odio adipisci rerum aut animi",
            "email": "Nikita@garfield.biz",
        }]);

        const handleDelete = (id) =>{
            const newComment = comments.filter(comment=>comment.id!=id);
            setComments(newComment);
        }

        const[name, setName] = useState("Jasdhir");

        useEffect(()=>{
            console.log("useEffect is called....")
        })
    return (
        
        <>
            <h1>List and Keys</h1>
            <Disp comments={comments} handleDelete = {handleDelete}/>
            <button onClick={()=>setName('Bhumik')}>Change Name</button>
        </>
    );
}

export default ListAndKeysComponent;