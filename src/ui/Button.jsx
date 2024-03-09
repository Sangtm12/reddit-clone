/* eslint-disable react/prop-types */
function Button({ children, bg }) {
  return (
    <button
      className={`flex justify-center items-center font-semibold ${
        bg === "light" && "bg-background-light"
      } hover:bg-background-hover px-4 py-2 rounded-full`}
    >
      {children}
    </button>
  );
}

export default Button;
