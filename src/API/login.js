import axios from "axios";
import CONSTS from "../constants/consts";

export async function login({ username, password }) {
  try {
    const response = await axios.post(
      `http://${CONSTS.BASE_URL}/api/v1/login`,
      {
        username,
        password,
      }
    );
    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
}
