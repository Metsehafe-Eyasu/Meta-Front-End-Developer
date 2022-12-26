import { useRef, useState } from "react";

const Form = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const fileInput = useRef(null);

  const handleSubmit = (e) => {
      e.preventDefault();
      const inputValue = inputRef.current.value;
      const files = fileInput.current.files;  
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Uncontrolled Input:
        <input ref={inputRef} type="text" />
      </label>
      <br/>
      <label>
        Controlled Input:
        <input value={value} onChange={handleChange} type="text" />
      </label>
      <br />
      <label>
        File Input:
        <input ref={fileInput} type="file"/>
      </label>
    </form>
  );
};

export default Form;
