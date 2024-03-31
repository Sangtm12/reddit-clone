import axios from "./axios";

export default async function logOut() {
  const response = await axios.get("api/v1/logout");
  return response;
}
