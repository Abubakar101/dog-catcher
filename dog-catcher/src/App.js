import React, { Component } from "react";
import InputForm from "./components/Input";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      breedNames: [],
      inputField: "",
      breedData: []
    };

    this.handleInputListener = this.handleInputListener.bind(this);
    this.handleSubmitListener = this.handleSubmitListener.bind(this);
    this.randomBreed = this.randomBreed.bind(this);
  }

  componentDidMount() {
    axios("https://dog.ceo/api/breeds/list").then(res => {
      console.log(res.data.message);
      this.setState({
        breedNames: res.data.message
      });
    });
  }

  randomBreed() {
    let breedNamesLength = this.state.breedNames.length;
    let randomNumber = Math.floor(breedNamesLength * Math.random());
    let tmpBreedName = this.state.breedNames[randomNumber];

    this.handleSubmitListener(tmpBreedName);

    console.log(this.state.inputField, "tmpbreed");
  }

  handleInputListener(event) {
    console.log(event.target.value);
    this.setState({
      inputField: event.target.value
    });
  }

  handleSubmitListener(value) {
    axios(`https://dog.ceo/api/breed/${value}/images`).then(res => {
      console.log(res.data.message[0]);
      this.setState({
        breedData: {
          name: value,
          images: res.data.message[0]
        }
      });
    });
  }

  render() {
    console.log(this.state.breedData);
    return (
      <div className="dogContainer">
        <InputForm
          inputField={this.state.inputField}
          handleChange={this.handleInputListener}
          handleSubmit={this.handleSubmitListener}
        />

        <button onClick={this.randomBreed} type="submit" value="submit">
          + Catch A Random Breed
        </button>
      </div>
    );
  }
}

export default App;
