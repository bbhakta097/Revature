import Comment from "./comments.js";

const Post = ({ comments }) => {
    return (
        <div>

            <h3>Post Title</h3>
            <p>Post content goes here...</p>

            <div>

                <h4>Comments:</h4>
                {comments.map((comment, index) => (
                    <Comment key={index} text={comment} />
                ))}

            </div>
        </div>
    );
};

export default Post;
