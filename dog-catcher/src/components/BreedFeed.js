import React, { Component } from "react";

class BreedFeed extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div className="breeds">
      <div className="midTopContainer">
      <h2 className="subTitle">Caught Breeds</h2>
      <button className="clearBtn" onClick={(e)=>{this.props.destroy(e)}} value="clearAll">
      X Clear All
    </button>
      </div>

      <div className="breedInfoContainer">
        {this.props.data.map((breed, i) => {
          return (
            <div className="breedInfoBox" key={i}>
            <div className="breedInfoTop">
            <div className="breedImages">
            <img scr={breed.images} alt="" />
            <button
              className="destroyBtn"
              onClick={e => {
                this.props.destroy(e,i);
              }}
              value="deleteBreed"
            >
              x
            </button>
                </div>
                </div>
             <p className="breedName"> {breed.name} </p>
              </div>
            );
          })}
          </div>
      </div>
    );
  }
}

export default BreedFeed;
