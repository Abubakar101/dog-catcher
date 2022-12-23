import React, { useEffect, useState } from "react";
import { callBreedApi, getRandomBreedData } from "./lib/utils";
import AppView from "./components";
import "./App.css";

const App = () => {
  const [breedNames, setBreedNames] = useState([]);
  const [breedData, setBreedData] = useState([]);

  useEffect(() => {
    const getBreedLists = async () => {
      const { message } = await callBreedApi("https://dog.ceo/api/breeds/list");
      setBreedNames(message);
    };

    getBreedLists();
  }, []);

  // Call API dog.ceo with the breed name to get picture
  const handleSubmit = async (value) => {
    const searchValue = value.trim();
    if (breedNames.includes(searchValue)) {
      const url = `https://dog.ceo/api/breed/${searchValue}/images`;
      const { message } = await callBreedApi(url);
      const randomBreedLink = getRandomBreedData(message.length, message);
      setBreedData((prev) => [
        { name: searchValue, images: randomBreedLink },
        ...prev,
      ]);
    } else {
      alert(`Please type a correct Breed Name!             
              Or Click on "Catch a Random Breed!!"`);
    }
  };

  // Random breed and then pass it to API call function - handleSubmit()
  const getRandomBreed = async () => {
    const randomBreedName = getRandomBreedData(breedNames.length, breedNames);
    await handleSubmit(randomBreedName);
  };

  // Delete Breed
  const deleteBreed = (event, id) => {
    if (event.target.value === "deleteBreed") {
      const del = [...breedData];
      del.splice(id, 1);
      setBreedData(del);
    } else {
      setBreedData([]);
    }
  };

  return (
    <AppView
      breedNames={breedNames}
      breedData={breedData}
      handleSubmit={handleSubmit}
      getRandomBreed={getRandomBreed}
      deleteBreed={deleteBreed}
    />
  );
};

export default App;
