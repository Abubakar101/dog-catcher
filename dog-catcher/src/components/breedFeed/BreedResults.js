import React from "react";
import BreedInfoBox from "./BreedInfoBox";

const BreedResults = ({ data, onDelete }) => {
  return (
    <div className="breedInfoContainer">
      {data.map(({ images, name }, index) => (
        <BreedInfoBox
          key={index}
          id={index}
          imageUrl={images}
          breedName={name}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default BreedResults;
