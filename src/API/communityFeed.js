import axios from "./axios";

async function communityFeed(community) {
  const response = await axios.get(`/posts?community.title=${community}`);
  console.log(response);
  return response.data;
}

export default communityFeed;
