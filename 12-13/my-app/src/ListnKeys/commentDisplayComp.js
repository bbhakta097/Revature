const commentDisplayComp = ({comments, handleDelete}) => {
    //const comments = props.comments;
    return (
        <>
        {
            comments.map((comment) => (
                <div key={comment.id}>
                    <h2>{comment.name}</h2>
                    <p>{comment.email}</p>
                    <button onClick={() => handleDelete(comment.id)}>Delete Comment</button>
                </div>
            ))
        }
        </>
    );
}

export default commentDisplayComp;