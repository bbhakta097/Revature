import React, { useState } from "react";
import axios from "axios";

const DeletePost = ({ onDeletePost }) => {
    const [postId, setPostId] = useState("");

    const handleDeletePost = () => {
        if (!postId) {
            alert("Please enter the Post ID to delete.");
            return;
        }

        axios
            .delete(`http://localhost:8000/posts/${postId}`)
            .then(() => {
                alert(`Post with ID ${postId} deleted successfully!`);
                setPostId("");
                onDeletePost();
            })
            .catch((error) => {
                console.error("Error deleting post:", error);
                alert("Failed to delete the post. Please check the Post ID.");
            });
    };

    return (
        <div>
            <br />
            <h3>Delete Post</h3>
            <input
                type="text"
                placeholder="Enter Post ID"
                value={postId}
                onChange={(e) => setPostId(e.target.value)}
            />
            <br />
            <button onClick={handleDeletePost}>Delete Post</button>
            <br />
        </div>
    );
};

export default DeletePost;
