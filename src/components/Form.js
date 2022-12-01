import React, { useEffect, useState, useRef } from "react";

const Form = ({ onEnterNumber = (f) => f }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onEnterNumber(inputRef.current.value);
  };

  // For users without a mouse
  useEffect(() => {
    document.addEventListener("keydown", keydownHandler, false);

    function keydownHandler(e) {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSubmit(e);
      }
    }

    return () => {
      document.removeEventListener("keydown", keydownHandler, false);
    };
  }, []);

  // Focus input control on first render
  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <>
      <section>
        <form className="form">
          <label className="hidden" htmlFor="numberInput">
            Enter your number
          </label>
          <input
            id="numberInput"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            name="numberInput"
            aria-label="number"
            ref={inputRef}
            placeholder="Number"
          />
          <button type="button" name="select" onClick={handleSubmit}>
            Select number
          </button>
        </form>
      </section>
    </>
  );
};

export default Form;
