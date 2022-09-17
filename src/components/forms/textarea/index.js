import TextareaAutosize from "@mui/material/TextareaAutosize";

const Textarea = ({
  placeholder,
  disabled,
  value,
  onChange,
  style,
  className,
  id,
  name,
  minRows,
}) => {
  return (
    <TextareaAutosize
      name={name}
      minRows={minRows}
      placeholder={placeholder}
      className={className}
      id={id}
      value={value}
      onChange={onChange}
      disabled={disabled}
      style={style}
    />
  );
};

export default Textarea;
