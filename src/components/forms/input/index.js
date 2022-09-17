const Input = ({
  placeholder,
  disabled,
  value,
  onChange,
  onBlur,
  style,
  label,
  id,
  name,
}) => {
  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <div className="input-wrapper">
        <input
          placeholder={placeholder}
          onBlur={onBlur}
          className="form-control"
          id={id}
          value={value}
          onChange={onChange}
          disabled={disabled}
          style={style}
          name={name}
        />
      </div>
    </div>
  );
};

export default Input;
