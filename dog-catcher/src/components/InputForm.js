import React, { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";

const InputForm = ({ breedNames, handleChange, handleSubmit }) => {
  // const [] = useState()
  // state = {
  //   // minLength: 1,
  //   // multiple: false,
  //   // selectHintOnEnter: true,
  //   emptyLabel: "",
  // };

  return (
    <form
      className="userInput"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e.target.breedName.value);
        e.target.breedName.value = "";
        this._typeahead.getInstance().clear();
      }}
    >
      <Typeahead
        // {...this.state}
        minLength={1}
        multiple={false}
        selectHintOnEnter={true}
        emptyLabel=""
        inputProps={{ name: "breedName" }}
        options={breedNames}
        type="text"
        placeholder="Find a breed to catch"
        ref={(ref) => (this._typeahead = ref)}
        onChange={handleChange}
      />
      <br />

      <button type="submit" value="submit">
        Search
      </button>
    </form>
  );
};
export default InputForm;
