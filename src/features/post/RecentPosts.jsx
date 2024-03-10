import { posts } from "../../data/posts";
import RecentPost from "./RecentPost";

function RecentPosts() {
  return (
    <div className="bg-background-dark py-4 m-4 rounded-2xl">
      <h2 className="px-4 py-2">Recent Posts</h2>
      {posts.map((post) => {
        return <RecentPost post={post} key={post.id} />;
      })}
    </div>
  );
}

export default RecentPosts;
