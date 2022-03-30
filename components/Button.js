import { useTheme } from "next-themes";

const Button = ({ className, children, ...props }) => {
  const { theme } = useTheme();

  return (
    <button
      className={`appearance-none font-mono font-semibold py-3 px-6 rounded-md border-2 bg-transparent text-lg cursor-pointer ${
        theme == "dark" ? "button-dark" : "button"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
