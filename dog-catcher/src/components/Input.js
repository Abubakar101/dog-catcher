import React, { Component } from "react";
import { Typeahead } from "react-bootstrap-typeahead";

class InputForm extends Component {
  state = {
    minLength: 1,
    multiple: false,
    selectHintOnEnter: false,
    emptyLabel: ""
  };

  render() {
    return (
      <form
        className="userInput"
        onSubmit={e => {
          e.preventDefault();
          this.props.handleSubmit(e.target.breedName.value);
        }}
      >
        <Typeahead
          {...this.state}
          inputProps={{name: "breedName"}}
          options={this.props.breedNames}
          type="text"
          // name="breedName"
          placeholder="Find a breed to catch"
          onChange={this.props.handleChange}
        />
        <br />

        <button type="submit" value="submit">
          Search
        </button>
      </form>
    );
  }
}
export default InputForm;
