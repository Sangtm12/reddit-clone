function ProfilePhoto({ src, size = "normal" }) {
  return (
    <img
      src={src}
      className={`${
        size === "big" ? "w-9 h-9" : "w-8 h-8"
      } rounded-full border-[1px] border-neutral-700`}
    />
  );
}

export default ProfilePhoto;
