import axios from "./axios";

async function getPost(id) {
  const response = await axios.get("/posts/" + id);

  return response.data;
}

export default getPost;
