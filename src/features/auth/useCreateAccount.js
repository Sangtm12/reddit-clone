import { useMutation } from "@tanstack/react-query";
import createUser from "../../API/createUser";

export default function useCreateAccount() {
  const { status, mutate: createAccount } = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { status, createAccount };
}
