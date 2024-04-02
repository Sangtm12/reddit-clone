import axios from "./axios";

async function getPost() {
  const response = await axios.get("api/v1/post");

  return response.data.data.Posts;
}

export default getPost;
