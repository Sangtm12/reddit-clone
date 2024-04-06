import axios from "./axios";

async function getPost() {
  const response = await axios.get("/posts");
  console.log(response);
  return response.data;
}

export default getPost;
