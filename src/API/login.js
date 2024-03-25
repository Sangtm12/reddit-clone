export async function login({ username, password }) {
  console.log("test");
  const promise = new Promise((resolve) =>
    setTimeout(() => {
      resolve(`Logged in as ${username} (${password})`);
    }, 2000)
  );
  const response = await promise;
  console.log("changed in branch main");
  console.log("created in branch login-api (FOR REAL)");
  return response;
}
