import axios from "axios";
import { useState } from "react";
const CreatePost = ({ OnNewPost }) => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleNewPost = () => {
        const newPost = {
            userId: 2,
            id: Date.now().toString(),
            title,
            body,
        };

        axios.post("http://localhost:8000/posts", newPost)
            .then(() => {
                OnNewPost();
                setTitle("");
                setBody("");
            })

    }

    return (
        <div>
            <br/>
            <h3>Create New Post</h3>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <textarea
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <br />
            <button onClick={handleNewPost}>Create Post</button>
            <br/>
        </div>
    );
}

export default CreatePost;