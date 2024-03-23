import { useMutation } from "@tanstack/react-query";
import logoutApi from "../../API/logout";

export default function useLogout() {
  const { status, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: (data) => console.log(data),
    onError: (err) => console.error(err),
  });
  return { status, logout };
}
