/* eslint-disable react/prop-types */
function Button({ children, light, rounded, className = "", ...rest }) {
  return (
    <button
      className={`flex justify-center items-center font-semibold ${
        light && "bg-background-light"
      } ${
        rounded ? "px-2" : "px-4"
      } hover:bg-background-hover py-2 rounded-full ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
