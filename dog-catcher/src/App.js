import React, { Component } from "react";
import InputForm from "./components/Input";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      inputField: "",
      timeField: ""
    };

    this.handleInputListener = this.handleInputListener.bind(this);
    this.handleSubmitListener = this.handleSubmitListener.bind(this);
    // this.deleteTweed = this.deleteTweed.bind(this);
  }

  componentDidMount() {
    axios("https://dog.ceo/api/breeds/list").then(res => {
      console.log(res.data.message);
      this.setState({
        data: res.data.message
      });
    });
  }

  handleInputListener(event) {
    console.log(event.target.value)
    this.setState({
      inputField: event.target.value
    });
  }

  handleSubmitListener(event) {
    // event.preventDefault();
    event.target.content = "";

    axios
      .post("/api/tweeds", {
        tweed: this.state.inputField
      })
      .then(res => {
        if (res.data.data.tweed.id !== undefined) {
          console.log(res.data.data.tweed.id);
          const newTweed = {
            tweed_text: res.data.data.tweed.tweed_text,
            id: res.data.data.tweed.id
          };
          this.setState(prevState => {
            console.log(prevState);
            return {
              data: prevState.data.concat(newTweed)
            };
          });
        }
      })
      .catch(err => console.log(err));
  }

  // Delete Tweed
  // deleteTweed(id) {
  //   location.reload();
  //   console.log("del", id);

  //   axios({
  //     method: "delete",
  //     url: "http://localhost:3000/api/tweeds",
  //     data: { id }
  //   })
  //     .then(res => {
  //       console.log("DELETE Request SENT");
  //     })
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <div className="dogContainer">
      <InputForm
      inputField={this.state.inputField}
      handleChange={this.handleInputListener}
      handleSubmit={this.handleSubmitListener}
    />
      </div>
    );
  }
}

export default App;
