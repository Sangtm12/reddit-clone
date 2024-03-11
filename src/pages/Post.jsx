import SinglePost from "../features/post/SinglePost";
import CommunityInfo from "../features/community/CommunityInfo";

function Post() {
  return (
    <div className="grid grid-cols-[auto_370px] w-full">
      <SinglePost />
      <CommunityInfo />
    </div>
  );
}

export default Post;
