import React, { ChangeEvent } from "react";

interface InputProps {  
    label?: string;
    className?: string;
    placeholder?: string;
    error?: string;
    type?: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  placeholder,
  className,
  value,
  onChange,
  error,
  type = "text"
}) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>):void => {
    onChange(e);
  };

  return (
    <div className="input-container">
      <label>
        <p className="label">{label}</p>
        <input
          name={name}
          type={type}
          className={`input ${className}`}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
        />
      </label>
      {error && <small className="input-error">{error}</small>}
    </div>
  );
};

export default Input;