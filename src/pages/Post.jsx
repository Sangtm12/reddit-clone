import SinglePost from "../features/post/SinglePost";
import CommunityInfo from "../features/community/CommunityInfo";

function Post() {
  return (
    <div className="grid grid-cols-[auto_370px] w-full">
      <div className="overflow-y-auto">
        <SinglePost />
      </div>
      <div className="overflow-y-auto">
        <CommunityInfo />
      </div>
    </div>
  );
}

export default Post;
