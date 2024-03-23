import { useMutation } from "@tanstack/react-query";
import ChangePasswordApi from "../../API/changePassword";

export default function useChangePassword() {
  const { status, mutate: changePassword } = useMutation({
    mutationFn: ChangePasswordApi,
    onSuccess: (data) => console.log(data),
    onError: (err) => console.error(err),
  });
  return { status, changePassword };
}
