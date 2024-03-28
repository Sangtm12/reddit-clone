import axios from "axios";
import consts from "../constants/consts";

async function getUser() {
  const userData = JSON.parse(
    localStorage.getItem("sb-tutaydcbsuglspuywosf-auth-token")
  );

  console.log(userData);

  const response = axios.get(consts.BASE_URL + "/user", {
    headers: {
      Authorization: `Bearer ${userData?.access_token}`,
    },
  });

  return response;
}

export default getUser;
