import { useState } from "react";
import { useRef } from "react";

const InputComponent = () => {
  const [inputText, setText] = useState("hello");
  const inputEl = useRef(null);


  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    inputEl.current.focus();
  }

  return (
    <div className="input">
      <input ref={inputEl} value={inputText} onChange={handleChange} />
      <p>You typed: {inputText}</p>
      <button onClick={() => setText("Hello")}>Reset</button>
      <button onClick={handleClick}>Focus on input</button>
    </div>
  );
};

export default InputComponent;
