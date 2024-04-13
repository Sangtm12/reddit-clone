import axios from "./axios";

async function updateLoggedInUserInteraction(userId, newInteraction) {
  const response = await axios.patch(`/users/${userId}`, {
    interactions: newInteraction,
  });
  return response.data;
}

export default updateLoggedInUserInteraction;
