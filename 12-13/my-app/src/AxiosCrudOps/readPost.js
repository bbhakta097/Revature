const ReadPost = ({posts}) =>{
    
    return(
            posts.map((post)=>(
                <div key={post.id}>
                    <br/>
                    <h3>User ID|Post ID ( {post.userId} | {post.id} )</h3>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))
    );
}

export default ReadPost;