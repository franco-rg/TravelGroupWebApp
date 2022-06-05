import { useEffect, useState } from "react";
import { Input } from "rsuite";
const InputUpper = ({
  value,
  className,
  onChange
}) => {
  const [textoinput, setTextoInput] = useState("");

  const onBlur = (e) => {
    setTextoInput(e.target.value.toUpperCase());
  }
  const onChangeInput = (e) => {
    setTextoInput(e.toUpperCase());
    if (onChange) {
      onChange(e);
    }
  }
  useEffect(() => {
    if (value) {
      setTextoInput(value.toUpperCase())
    }
  }, [])

  return (
    <Input className={className + " uppercase"}
      value={textoinput}
      onChange={onChangeInput}
      onBlur={onBlur}
    />
  );
};

export default InputUpper;