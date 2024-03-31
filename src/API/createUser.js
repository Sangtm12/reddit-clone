import axios from "./axios";

export default async function createUser({ username, password }) {
  try {
    const response = await axios.post(`api/v1/register`, {
      name: username,
      email: "test@test.com",
      password,
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
}
