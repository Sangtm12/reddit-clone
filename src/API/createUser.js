import axios from "axios";
import consts from "../constants/consts";

export default async function createUser({ username, password }) {
  try {
    const response = await axios.post(
      `http://${consts.BASE_URL}/api/v1/register`,
      { name: username, email: "test@test.com", password }
    );
    console.log(response);
  } catch (err) {
    console.error(err);
  }
}
