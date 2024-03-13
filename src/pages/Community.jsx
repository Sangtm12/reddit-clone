import CommunityFeed from "../features/community/CommunityFeed";
import CommunityHeader from "../features/community/CommunityHeader";
import CommunityInfo from "../features/community/CommunityInfo";

function Community() {
  return (
    <div className="h-[90vh] overflow-y-auto grow">
      <CommunityHeader />
      <div className="grid grid-cols-[auto_370px] w-full">
        <div className=" mt-8 ">
          <CommunityFeed />
        </div>
        <div className="overflow-y-auto">
          <CommunityInfo />
        </div>
      </div>
    </div>
  );
}

export default Community;
