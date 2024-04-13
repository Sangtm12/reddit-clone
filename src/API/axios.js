import axios from "axios";

export default axios.create({
  baseURL: "https://reddit-clone-server.vercel.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

//
