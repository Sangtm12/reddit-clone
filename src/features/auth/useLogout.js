import { useMutation, useQueryClient } from "@tanstack/react-query";
import logOutApi from "../../API/logout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { status, mutate: logout } = useMutation({
    mutationFn: logOutApi,
    onSuccess: () => {
      toast.success("Logged out successfully");
      queryClient.resetQueries({
        queryKey: ["loggedInUser"],
      });
      navigate("/");
    },
    onError: (err) => console.error(err),
  });
  return { status, logout };
}
