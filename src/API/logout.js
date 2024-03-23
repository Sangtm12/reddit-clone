export default async function logout() {
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("User logged out");
    }, 1000);
  });
  return response;
}
