import axios from "./axios";

export default async function createUser({ username, password }) {
  try {
    const response = await axios.post(`/auth/register`, {
      email: username + "@json-server.com",
      password,
      name: username,
      photo: "/users/sangtm.png",
      posts: 0,
      createdAt: Date.now(),
      interactions: {
        posts: [],
        comments: [],
      },
      comments: [],
    });
    return response;
  } catch (err) {
    console.error(err);
  }
}
