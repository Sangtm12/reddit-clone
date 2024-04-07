import axios from "./axios";

async function getLoggedInUser() {
  const response = await axios.get("/loggedInUser");
  return response.data;
}

export default getLoggedInUser;
