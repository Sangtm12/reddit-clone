import SingleComment from "./SingleComment";

function PostComments({ post }) {
  return (
    <div>
      {post.comments.map((comment) => {
        return <SingleComment comment={comment} key={comment.id} />;
      })}
    </div>
  );
}

export default PostComments;
