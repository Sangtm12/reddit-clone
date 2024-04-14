export default function calcDate(dateStr) {
  const postDate = new Date(dateStr);
  const time = Date.now() - postDate.getTime();
  if (0 <= time && time < 60000) {
    return "Just now";
  } else if (60000 <= time && time < 3600000) {
    return `${Math.round(time / 60000)} mins ago`;
  } else if (3600000 <= time && time < 86400000) {
    return `${Math.round(time / 3600000)} hr. ago`;
  } else if (86400000 <= time && time < 2592000000) {
    return `${Math.round(time / 86400000)} days ago`;
  } else if (2592000000 <= time && time < 31104000000) {
    return `${Math.round(time / 2592000000)} month${
      Math.round(time / 2592000000) > 1 ? "s" : ""
    } ago`;
  }
}
