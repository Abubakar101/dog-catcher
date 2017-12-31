import React, { Component } from "react";

class InputForm extends Component {
  render() {
    return (
      <form
        className="userInput"
        onSubmit={e => {
          e.preventDefault();
          this.props.handleSubmit(e.target.breed_text.value);
        }}
      >
        <input
          type="text"
        //   value={this.props.inputField}
          name="breed_text"
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
