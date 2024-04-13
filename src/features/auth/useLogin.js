import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { login as loginApi } from "../../API/login";

export default function useLogin() {
  const queryClient = useQueryClient();
  const { status, mutate } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      toast.success("Logged in successfully");
      console.log(data);
      //window.localStorage.setItem("tokens", JSON.stringify(data));
      //because no JWT for json-server
      window.localStorage.setItem("user", data.id);
      queryClient.invalidateQueries({
        queryKey: ["loggedInUser"],
      });
    },
    onError: (err) => {
      toast.error(err);
    },
  });
  return { status, mutate };
}
