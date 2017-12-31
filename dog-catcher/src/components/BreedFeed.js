import React, { Component } from "react";

class BreedFeed extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div className="breeds">
        <button onClick={(e)=>{this.props.destroy(e)}} value="clearAll">
          X Clear All
        </button>
        {this.props.data.map((breed, i) => {
          return (
            <div key={i}>
              <button
                className="destroyBtn"
                onClick={e => {
                  this.props.destroy(e,i);
                }}
                value="deleteBreed"
              >
                x
              </button>

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
