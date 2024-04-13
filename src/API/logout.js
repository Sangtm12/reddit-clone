// import axios from "./axios";

export default function logOut() {
  // const response = await axios.get("api/v1/logout");
  localStorage.removeItem("user");
  return Promise.resolve("Logged out successfully");
}
