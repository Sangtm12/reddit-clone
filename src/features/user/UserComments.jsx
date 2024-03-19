import { posts } from "../../data/posts";
import HomePost from "../post/HomePost";

function UserComments() {
  return (
    <>
      {posts.map((post) => {
        return <HomePost post={post} key={post.id} />;
      })}
    </>
  );
}

export default UserComments;
