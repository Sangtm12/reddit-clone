export async function login({ userName, password }) {
  const promise = new Promise((resolve) =>
    setTimeout(resolve(`Logged in as ${userName} (${password})`), 5000)
  );
  const response = await promise;
  return response;
}
