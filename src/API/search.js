export default async function search(query) {
  const response = await new Promise((res) => {
    setTimeout(() => res(`searched for: ${query}`), 1000);
  });
  return response;
}
