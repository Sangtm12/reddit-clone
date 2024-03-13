import SingleComment from "./SingleComment";

function PostComments({ post }) {
  return (
    <div>
      {post.comments.map((comment) => {
        return <SingleComment comment={comment} key={comment.user} />;
      })}
    </div>
  );
}

export default PostComments;
