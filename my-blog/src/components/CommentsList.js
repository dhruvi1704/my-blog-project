const commentsList = ({ comments}) =>(
    <>
    <h3>comments: </h3>
    {comments.map(Comment => (
        <div className="comment" key ={commentsList.postedBy + ':' +Comment.text}>
            <h4>{Comment.postedBy}</h4>
            <p>{Comment.text}</p>
        </div>
    ))}
    </>
);

export default commentsList;