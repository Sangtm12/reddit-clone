import { useParams } from "react-router-dom";
import { posts } from "../../data/posts";
import HomePost from "../post/HomePost";

function CommunityFeed() {
  const { communityId } = useParams();
  const communityPosts = posts.filter((post) => {
    return post.community.title === communityId;
  });
  return (
    <div>
      {communityPosts.map((post) => {
        return <HomePost post={post} key={post.id} />;
      })}
    </div>
  );
}

export default CommunityFeed;
