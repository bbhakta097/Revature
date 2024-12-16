import React, { useState } from "react";
import axios from "axios";


const UpdatePost = ({ onUpdatePost }) => {
    const [postId, setPostId] = useState("");
    const [title, setTitle] = useState(""); 
    const [body, setBody] = useState(""); 

    const handleUpdatePost = () => {
        if (!postId) {
            alert("Please enter the Post ID to update.");
            return;
        }

        const updatedPost = {
            userId: 2,
            id: postId.toString(), 
            title,
            body,
        };

        axios
            .put(`http://localhost:8000/posts/${postId}`, updatedPost) // Use the postId in the URL
            .then(() => {
                onUpdatePost(); 
                alert("Post updated successfully!");
                setPostId("");
                setTitle("");
                setBody("");
            })
            .catch((error) => {
                console.error("Error updating post:", error);
                alert("Failed to update the post. Please check the Post ID.");
            });
    };

    return (
        <div>
            <br/>
            <h3>Update Post</h3>
            <input
                type="text"
                placeholder="Post ID"
                value={postId}
                onChange={(e) => setPostId(e.target.value)}
            />
            <br />
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
            <button onClick={handleUpdatePost}>Update Post</button>
            <br />
        
        </div>
    );
};

export default UpdatePost;