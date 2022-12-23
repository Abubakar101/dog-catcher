import React from "react";

const BreedInfoBox = ({ imageUrl, breedName, onDelete, id }) => {
  return (
    <div className="breedInfoBox">
      <div className="breedInfoTop">
        <div className="breedImages">
          <img
            src={imageUrl}
            alt={`Picture of ${breedName}`}
            title={`Picture of ${breedName}`}
          />
          <button
            className="deleteBtn"
            onClick={(event) => onDelete(event, id)}
            value="deleteBreed"
          >
            x
          </button>
        </div>
      </div>
      <p className="breedName"> {breedName} </p>
    </div>
  );
};

export default BreedInfoBox;
