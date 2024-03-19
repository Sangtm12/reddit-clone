import { posts } from "../../data/posts";
import HomePost from "../post/HomePost";

function UserPosts() {
  return (
    <>
      {posts.map((post) => {
        return <HomePost post={post} key={post.id} />;
      })}
    </>
  );
}

export default UserPosts;
