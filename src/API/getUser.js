import axios from "./axios";

async function getUser() {
  const tokens = JSON.parse(localStorage.getItem("tokens"));
  const response = await axios.get("/user", {
    headers: {
      Authorization: `Bearer ${tokens?.accessToken}`,
    },
  });

  return response;
}

export default getUser;
