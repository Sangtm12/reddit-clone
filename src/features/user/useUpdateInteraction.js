import { useMutation, useQueryClient } from "@tanstack/react-query";
import updateLoggedInUserInteraction from "../../API/updateLoggedInUserInteraction";
import useLoggedInUser from "./useLoggedInUser";

function useUpdateInteraction() {
  const queryClient = useQueryClient();

  const { data: loggedInUser } = useLoggedInUser();
  const currentInteractions = loggedInUser?.interactions;

  const { mutate, status } = useMutation({
    mutationFn: async ({ upvoteOrDownvote, postOrComment, id }) => {
      let newInteraction = { ...currentInteractions };
      if (!newInteraction.posts) return null;
      try {
        if (postOrComment === "post") {
          const existingPost = newInteraction.posts?.find(
            (post) => post.id === id
          );
          if (existingPost && existingPost.interaction === upvoteOrDownvote) {
            const existingPostIndex = newInteraction.posts.findIndex(
              (post) => post.id === id
            );
            newInteraction.posts.splice(existingPostIndex, 1);
          } else if (existingPost) {
            newInteraction.posts = newInteraction.posts.map((post) => {
              return post.id === id
                ? { id, interaction: upvoteOrDownvote }
                : post;
            });
          } else {
            newInteraction.posts.push({
              id,
              interaction: upvoteOrDownvote,
            });
          }
        } else if (postOrComment === "comment") {
          if (newInteraction.comments.find((comment) => comment.id === id)) {
            newInteraction.comments = newInteraction.comments.map((comment) => {
              return comment.id === id
                ? { id, interaction: upvoteOrDownvote }
                : comment;
            });
          } else {
            newInteraction.comments.push({
              id,
              interaction: upvoteOrDownvote,
            });
          }
        }
      } catch (err) {
        console.error(err);
      }

      const result = await updateLoggedInUserInteraction(
        loggedInUser.id,
        newInteraction
      );
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["loggedInUser"],
      });
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return { mutate, status };
}

export default useUpdateInteraction;
