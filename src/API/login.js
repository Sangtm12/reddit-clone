import axios from "./axios";

export async function login({ username, password }) {
  const response = await axios.post("/api/v1/login", {
    username: username,
    email: "test@test.com",
    password,
  });

  return response.data;
}
