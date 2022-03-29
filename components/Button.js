const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={`appearance-none font-mono font-semibold py-3 px-6 rounded-md border-2 bg-transparent text-lg cursor-pointer button ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
