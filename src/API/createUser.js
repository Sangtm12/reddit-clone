export default async function createUser({ username, password }) {
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`created user: ${username}, password ${password}`);
    }, 3000);
  });
  return response;
}
