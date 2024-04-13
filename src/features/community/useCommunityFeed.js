import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import communityFeedAPI from "../../API/communityFeed";

function useCommunityFeed() {
  const { communityId } = useParams();
  const { data: communityFeed, status } = useQuery({
    queryKey: ["community", communityId],
    queryFn: async () => {
      return await communityFeedAPI(communityId);
    },
  });
  return { communityFeed, status };
}

export default useCommunityFeed;
