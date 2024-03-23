export default async function changeUsername({ currentPassword, newUsername }) {
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Username changed to ${newUsername}, (${currentPassword})`);
    }, 1000);
  });

  return response;
}
