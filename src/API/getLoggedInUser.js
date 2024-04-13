import axios from "./axios";

async function getLoggedInUser(id) {
  if (!id) return null;
  try {
    const response = await axios.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return null;
}

export default getLoggedInUser;
