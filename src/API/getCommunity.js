import axios from "./axios";

async function getCommunity() {
  const response = await axios.get("api/v1/community");
  console.log(response);
}

export default getCommunity;
