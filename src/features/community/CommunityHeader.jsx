import { useParams } from "react-router-dom";
import { communities } from "../../data/communities";

function CommunityHeader() {
  const { communityId } = useParams();

  const currentCommunity = communities.filter(
    (com) => com.name === communityId
  )[0];

  console.log(currentCommunity);

  return (
    <>
      <div className="m-4 rounded-xl brightness-85 h-[10rem] relative">
        <img src="/banner.webp" alt="" className="h-full w-full" />
        <img
          src={`${currentCommunity.photo}`}
          className="absolute z-[1] bottom-0 left-3 translate-y-1/2 w-28 h-28 rounded-full overflow-hidden border-4 border-background"
        />
      </div>
      <div className="mt-4 ">
        <h4 className=" ml-36 text-3xl">r/{currentCommunity.name}</h4>
      </div>
    </>
  );
}

export default CommunityHeader;
