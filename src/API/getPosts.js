import axios from "./axios";

async function getPosts() {
  const response = await axios.get("/posts");

  return response.data;
}

export default getPosts;
