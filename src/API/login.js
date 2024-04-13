import axios from "./axios";

//mock login API because json-server-auth cannot be deployed to vercel
//no JWT
export async function login({ username, password }) {
  try {
    const response = await axios.get(`/users/${username}`);
    if (response.data.password !== password) {
      return Promise.reject("Incorrect password");
    }
    return response.data;
  } catch (error) {
    if (error.response.status == 404) {
      return Promise.reject("User not found");
    }
  }
}
