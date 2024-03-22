import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../API/login";

export default function useLogin() {
  const { isLoading, mutate } = useMutation({
    queryFn: loginApi,
    onSuccess: () => {
      console.log("Login successful");
    },
    onError: () => {
      console.log("Login failed");
    },
  });
  return { isLoading, mutate };
}
