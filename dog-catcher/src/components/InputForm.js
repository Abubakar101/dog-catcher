import React, { useState, createRef } from "react";
import { Typeahead } from "react-bootstrap-typeahead";

const InputForm = ({ breedNames, handleSubmit }) => {
  const ref = createRef();
  const [inputValue, setInputValue] = useState();

  return (
    <form
      className="userInput"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(inputValue[0] || "");
        ref.current.clear();
      }}
    >
      <Typeahead
        id="typeahead-id"
        onChange={setInputValue}
        options={breedNames}
        labelKey="name"
        minLength="1"
        multiple={false}
        selectHintOnEnter
        ref={ref}
      />

      <button type="submit" value="submit">
        Search
      </button>
    </form>
  );
};

export default InputForm;
