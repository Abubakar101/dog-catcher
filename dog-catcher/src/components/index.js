import React from "react";
import BreedFeed from "./breedFeed";
import InputForm from "./InputForm";
import MidContainer from "./MidContainer";

const AppView = ({
  breedNames,
  breedData,
  handleSubmit,
  getRandomBreed,
  deleteBreed,
}) => {
  return (
    <div className="dogContainer">
      <h1 className="MainTitle">Dog Catcher</h1>
      <InputForm breedNames={breedNames} handleSubmit={handleSubmit} />
      <MidContainer onDelete={deleteBreed} getRandomBreed={getRandomBreed} />
      <BreedFeed data={breedData} onDelete={deleteBreed} />
    </div>
  );
};

export default AppView;
