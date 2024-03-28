import axios from "axios";
import CONSTS from "../constants/consts";

export async function login({ username, password }) {
  const response = await axios.post(`${CONSTS.BASE_URL}/api/v1/login`, {
    username: username,
    email: "test@test.com",
    password,
  });

  return response.data;
}
