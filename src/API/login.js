export async function login({ userName, password }) {
  console.log("promise...");
  const response = await new Promise((resolve, reject) =>
    setTimeout(resolve(`Logged in as ${userName}`), 1000),
  );
  return response;
}
