import React, { Component } from "react";
import InputForm from "./components/Input";
import BreedFeed from "./components/BreedFeed";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      breedNames: [],
      breedData: []
    };

    this.handleSubmitListener = this.handleSubmitListener.bind(this);
    this.randomBreed = this.randomBreed.bind(this);
    this.deleteBreed = this.deleteBreed.bind(this);
  }

  // Get all the Breed names from API
  // Set state for later use
  componentDidMount() {
    axios("https://dog.ceo/api/breeds/list").then(res => {
      this.setState({
        breedNames: res.data.message
      });
    });
  }

  // Random breed and then pass it to API call function - handleSubmitListener()
  randomBreed() {
    let breedNamesLength = this.state.breedNames.length;
    let randomNumber = Math.floor(breedNamesLength * Math.random());
    let tmpBreedName = this.state.breedNames[randomNumber];
    this.handleSubmitListener(tmpBreedName);
  }

  // Call API dog.ceo with the breed name to get picture
  handleSubmitListener(value) {
    value = value
      .split(" ")
      .join("")
      .toLowerCase();
    if (this.state.breedNames.includes(value)) {
      axios(`https://dog.ceo/api/breed/${value}/images`).then(res => {
        this.setState({
          breedData: [
            { name: value, images: res.data.message[0] },
            ...this.state.breedData
          ]
        });
      });
    } else {
      alert(`Please type a correct Breed Name!             
            Or Click on "Catch a Random Breed!!"`);
    }
  }

  // Delete Breed
  deleteBreed(e, id) {
    if (e.target.value === "deleteBreed") {
      let del = this.state.breedData;
      delete del[id];
      this.setState({
        breedData: del
      });
    } else {
      this.setState({
        breedData: []
      });
    }
  }

  render() {
    return (
      <div className="dogContainer">
        <h1 className="MainTitle">Dog Catcher</h1>
        <InputForm
          breedNames={this.state.breedNames}
          handleSubmit={this.handleSubmitListener}
        />

        <button className="randomBreedBtn" onClick={this.randomBreed}>
          + Catch A Random Breed
        </button>

        <BreedFeed data={this.state.breedData} destroy={this.deleteBreed} />
      </div>
    );
  }
}

export default App;
