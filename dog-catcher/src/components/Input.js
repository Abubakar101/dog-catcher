import React, { Component } from "react";
import { Typeahead } from "react-bootstrap-typeahead";

class InputForm extends Component {
  state = {
    minLength: 1,
    multiple: false,
    selectHintOnEnter: true,
    emptyLabel: ""
  };

  render() {
    return (
      <form
        className="userInput"
        onSubmit={e => {
          e.preventDefault();
          this.props.handleSubmit(e.target.breedName.value);
          e.target.breedName.value = "";
          this._typeahead.getInstance().clear();
        }}
      >
        <Typeahead
          {...this.state}
          inputProps={{ name: "breedName" }}
          options={this.props.breedNames}
          type="text"
          placeholder="Find a breed to catch"
          ref={ref => (this._typeahead = ref)}
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
