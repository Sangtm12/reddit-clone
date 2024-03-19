import { posts } from "../../data/posts";
import HomePost from "../post/HomePost";

function UserOverview() {
  return (
    <>
      {posts.map((post) => {
        return <HomePost post={post} key={post.id} />;
      })}
    </>
  );
}

export default UserOverview;
