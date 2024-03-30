import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { login as loginApi } from "../../API/login";

export default function useLogin() {
  const { status, mutate } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      toast.success("Logged in successfully");
      window.localStorage.setItem("tokens", JSON.stringify(data));
    },
    onError: (err) => {
      toast.error(err.response.data.error);
    },
  });
  return { status, mutate };
}
