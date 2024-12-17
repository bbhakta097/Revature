import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ReadPost from "./readPost";
import CreatePost from "./CreatePost";
import UpdatePost from "./updatePost";
import DeletePost from "./DeletePost";



const AxiosDisplay = () => {

    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        axios.get("http://localhost:8000/posts")
            .then((res) => {
                setPosts(res.data);
            })
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Axios Crud Operations</h1>
            <ReadPost posts={posts} />
            <CreatePost onNewPost={fetchPosts}/>
            <UpdatePost onUpdatePost={fetchPosts}/>
            <DeletePost onDeletePost={fetchPosts}/>
           
        </div>
    );
}

export default AxiosDisplay;