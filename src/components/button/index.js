import { Button } from "react-bootstrap";

const Index = ({
  title,
  disabled,
  size,
  color = "primary",
  type,
  onClick,
  className = "",
  leftIcon,
  rightIcon,
  singleIcon,
  rounded,
  children,
  style,
}) => {
  const customStyle = {
    color: color === "primary" ? "#fff" : "",
    ...style,
  };
  return (
    <Button
      className={`${className} 
      ${rounded ? "btn-rounded" : ""} 
      ${leftIcon ? "ps-5" : ""} 
      ${rightIcon ? "pe-5" : ""}`}
      disabled={disabled}
      variant={color}
      size={size}
      type={type ?? "button"}
      onClick={onClick}
      style={customStyle}
    >
      {leftIcon && <span className="material-icons left-icon">{leftIcon}</span>}
      {singleIcon && <span className="material-icons">{singleIcon}</span>}
      {title ?? children}
      {rightIcon && (
        <span className="material-icons right-icon">{rightIcon}</span>
      )}
    </Button>
  );
};

export default Index;
