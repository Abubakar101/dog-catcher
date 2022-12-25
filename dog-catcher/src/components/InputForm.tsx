import { useState, createRef, Ref } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { InputFormProps } from "../lib/types";

const InputForm = ({ breedNames, handleSubmit }: InputFormProps) => {
  const ref: any = createRef();
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <form
      className="userInput"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(inputValue);
        ref.current.clear();
      }}
    >
      <Typeahead
        id="typeahead-id"
        onChange={(option: any) => setInputValue(option)}
        options={breedNames}
        labelKey="name"
        minLength={1}
        multiple={false}
        ref={ref}
      />

      <button type="submit" value="submit">
        Search
      </button>
    </form>
  );
};

export default InputForm;
