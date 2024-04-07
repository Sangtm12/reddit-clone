import axios from "./axios";

async function updateLoggedInUserInteraction(newInteraction) {
  const response = axios.patch("/loggedInUser", {
    interactions: newInteraction,
  });
  return response.data;
}

export default updateLoggedInUserInteraction;
