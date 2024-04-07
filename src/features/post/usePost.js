import { useQuery } from "@tanstack/react-query";
import getPost from "../../API/getPost";
import { useParams } from "react-router-dom";

function usePost() {
  const { postId } = useParams();

  const { data, status } = useQuery({
    queryKey: ["post", postId],
    queryFn: async () => {
      const data = await getPost(postId);
      return data;
    },
  });

  return { data, status };
}
export default usePost;
