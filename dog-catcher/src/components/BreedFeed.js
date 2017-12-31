import React, { Component } from "react";

class BreedFeed extends Component {
  render() {
    return (
      <div className="breeds">
        <div className="midTopContainer">
          <h2 className="subTitle">Caught Breeds</h2>
          <button
            className="clearBtn"
            onClick={e => {
              this.props.destroy(e);
            }}
            value="clearAll"
          >
            X Clear All
          </button>
        </div>

        {this.props.data.length > 0 ? (
          <div className="breedInfoContainer">
            {this.props.data.map((breed, i) => {
              return (
                <div className="breedInfoBox" key={i}>
                  <div className="breedInfoTop">
                    <div className="breedImages">
                      <img src={breed.images} alt="" />
                      <button
                        className="destroyBtn"
                        onClick={e => {
                          this.props.destroy(e, i);
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
        ) : (
          <div className="emptyMessageContainer">
            <p className="emptyMessage">
              There are currently no breeds caught.
            </p>
            <p className="emptyMessage">Search above to catch some!</p>
          </div>
        )}
      </div>
    );
  }
}

export default BreedFeed;
