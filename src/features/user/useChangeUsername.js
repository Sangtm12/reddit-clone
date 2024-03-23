import { useMutation } from "@tanstack/react-query";
import changeUsernameApi from "../../API/changeUsername";

export default function useChangeUsername() {
  const { status, mutate: changeUsername } = useMutation({
    mutationFn: changeUsernameApi,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.error(err);
    },
  });
  return { status, changeUsername };
}
