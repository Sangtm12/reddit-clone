import axios from "axios";

export default axios.create({
  baseURL: "https://json-server-vercel-vsll.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

//"https://reddit-clone-server.vercel.app"
