import React from "react";
import BreedResults from "./BreedResults";
import BreedMessage from "./BreedMessage";

const BreedFeed = ({ data, onDelete }) => {
  return (
    <div className="breeds">
      {data.length > 0 ? (
        <BreedResults data={data} onDelete={onDelete} />
      ) : (
        <BreedMessage />
      )}
    </div>
  );
};

export default BreedFeed;
