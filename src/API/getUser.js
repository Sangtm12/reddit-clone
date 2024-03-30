import axios from "axios";
import consts from "../constants/consts";

async function getUser() {
  const tokens = JSON.parse(localStorage.getItem("tokens"));

  const response = await axios.get(consts.BASE_URL + "/user", {
    headers: {
      Authorization: `Bearer ${tokens?.accessToken}`,
    },
  });

  return response.data;
}

export default getUser;
