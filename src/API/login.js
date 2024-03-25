export async function login({ username, password }) {
  const promise = new Promise((resolve) =>
    setTimeout(() => {
      resolve(`Logged in as ${username} (${password})`);
    }, 2000)
  );
  console.log("test from login-api");
  const response = await promise;
  console.log("created in branch login-api (FOR REAL)");
  return response;
}
