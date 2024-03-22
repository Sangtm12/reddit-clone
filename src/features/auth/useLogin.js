import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../API/login";

export default function useLogin() {
  const { isLoading, mutate } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.error(err);
    },
  });
  return { isLoading, mutate };
}
