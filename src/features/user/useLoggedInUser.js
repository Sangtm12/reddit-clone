import { useQuery } from "@tanstack/react-query";
import getLoggedInUserApi from "../../API/getLoggedInUser";

function useLoggedInUser() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["loggedInUser"],
    queryFn: () => {
      const userId = localStorage.getItem("user");
      return getLoggedInUserApi(userId);
    },
  });
  return { data, isLoading, error };
}

export default useLoggedInUser;
