import { useQuery } from "@tanstack/react-query";
import getPostsAPI from "../../API/getPosts";

function usePosts() {
  const { data, status } = useQuery({
    queryKey: ["posts"],
    queryFn: getPostsAPI,
  });
  return { data, status };
}

export default usePosts;
