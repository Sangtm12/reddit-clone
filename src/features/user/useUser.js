import { useQuery } from "@tanstack/react-query";
import getUserApi from "../../API/getUser";

function useUser() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: getUserApi,
  });
  return { data, isLoading, error };
}

export default useUser;
