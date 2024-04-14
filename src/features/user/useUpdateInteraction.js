import { useMutation, useQueryClient } from "@tanstack/react-query";
import updateLoggedInUserInteraction from "../../API/updateLoggedInUserInteraction";
import useLoggedInUser from "./useLoggedInUser";
import toast from "react-hot-toast";

function useUpdateInteraction() {
  const queryClient = useQueryClient();

  const { data: loggedInUser } = useLoggedInUser();
  const currentInteractions = loggedInUser?.interactions;

  function updateInteractionObject(
    upvoteOrDownvote,
    postOrComment,
    id,
    currentInteractions
  ) {
    let newInteraction = JSON.parse(JSON.stringify(currentInteractions));
    if (newInteraction.posts === undefined) {
      return null;
    }
    try {
      if (postOrComment === "post") {
        const existingPost = newInteraction.posts.find(
          (post) => post.id === id
        );
        if (existingPost && existingPost.interaction === upvoteOrDownvote) {
          const existingPostIndex = newInteraction.posts.findIndex(
            (post) => post.id === id
          );
          newInteraction.posts.splice(existingPostIndex, 1);
          // newInteraction.upvotes -= 1;
          console.log(currentInteractions);
        } else if (existingPost) {
          newInteraction.posts = newInteraction.posts.map((post) => {
            return post.id === id
              ? { id, interaction: upvoteOrDownvote }
              : post;
          });
        } else {
          newInteraction.posts = [
            ...newInteraction.posts,
            { id, interaction: upvoteOrDownvote },
          ];
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
    return newInteraction;
  }

  const { mutate, status } = useMutation({
    mutationFn: async ({ upvoteOrDownvote, postOrComment, id }) => {
      const newInteractions = updateInteractionObject(
        upvoteOrDownvote,
        postOrComment,
        id,
        currentInteractions
      );
      const result = await updateLoggedInUserInteraction(
        loggedInUser.id,
        newInteractions
      );
      return result;
    },
    // onSuccess: () => {
    //   queryClient.invalidateQueries({
    //     queryKey: ["loggedInUser"],
    //   });
    // },
    onMutate: async ({ upvoteOrDownvote, postOrComment, id }) => {
      await queryClient.cancelQueries({ queryKey: ["loggedInUser"] });
      const currentLoggedInUser = queryClient.getQueryData(["loggedInUser"]);
      queryClient.setQueryData(["loggedInUser"], {
        ...loggedInUser,
        interactions: updateInteractionObject(
          upvoteOrDownvote,
          postOrComment,
          id,
          currentInteractions
        ),
      });
      return { currentLoggedInUser };
    },
    onError: (err, variables, { currentLoggedInUser }) => {
      toast.error("Cannot update interaction");
      queryClient.setQueryData(["loggedInUser"], currentLoggedInUser);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["loggedInUser"],
      });
    },
  });

  return { mutate, status };
}

export default useUpdateInteraction;
