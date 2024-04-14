import Spinner from "../../ui/Spinner";
import HomePost from "../post/HomePost";
import useCommunityFeed from "./useCommunityFeed";

function CommunityFeed() {
  const { communityFeed, status } = useCommunityFeed();

  return status !== "success" ? (
    <Spinner />
  ) : (
    <div>
      {communityFeed?.map((post) => {
        return <HomePost post={post} key={post.id} />;
      })}
    </div>
  );
}

export default CommunityFeed;
