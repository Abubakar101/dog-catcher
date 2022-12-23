import React from "react";

const MidContainer = ({ getRandomBreed, onDelete }) => {
  return (
    <>
      <button className="randomBreedBtn" onClick={getRandomBreed}>
        + Catch A Random Breed
      </button>
      <div className="midTopContainer">
        <h2 className="subTitle">Caught Breeds</h2>
        <button className="clearBtn" onClick={onDelete} value="clearAll">
          X Clear All
        </button>
      </div>
    </>
  );
};

export default MidContainer;
