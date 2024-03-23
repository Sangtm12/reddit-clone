export default async function changePassword({ currentPassword, newPassword }) {
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Password changed from ${currentPassword} to ${newPassword}`);
    }, 1000);
  });
  return response;
}
