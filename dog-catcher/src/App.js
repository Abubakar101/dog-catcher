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
      inputField: "",
      breedData: []
    };

    this.handleInputListener = this.handleInputListener.bind(this);
    this.handleSubmitListener = this.handleSubmitListener.bind(this);
    this.randomBreed = this.randomBreed.bind(this);
    this.deleteBreed = this.deleteBreed.bind(this);
  }

  componentDidMount() {
    axios("https://dog.ceo/api/breeds/list").then(res => {
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
  }

  handleInputListener(event) {
    console.log(event.target.value);
    this.setState({
      inputField: event.target.value
    });
  }

  handleSubmitListener(value) {
    value = value.toLowerCase();
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
            i.e., "african", Collie, Coonhound, Cairn & etc 
            
            Or Click on "Catch a Random Breed!!"
            `);
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
    console.log(this.state.breedData, "Breed Data");
    return (
      <div className="dogContainer">
        <h1 className="MainTitle">Dog Catcher</h1>
        <InputForm
          inputField={this.state.inputField}
          handleChange={this.handleInputListener}
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
