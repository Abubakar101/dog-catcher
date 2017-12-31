import React, { Component } from "react";
import Destroy from "./Destroy";

class BreedFeed extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div className="breeds">
        {this.props.data.map((breed, i) => {
          return (
            <div key={i}>
              <Destroy
                destroy={e => {
                  this.props.destroy(i);
                }}
              />
              {breed.images}
              {breed.name}
            </div>
          );
        })}
      </div>
    );
  }
}

export default BreedFeed;
// <Breed breed={breed} key={i} destroy={this.props.destroy} />;
