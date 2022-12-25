import { BreedResultsProps } from "../../lib/types";
import BreedInfoBox from "./BreedInfoBox";

const BreedResults = ({ data, onDelete }: BreedResultsProps) => {
  return (
    <div className="breedInfoContainer">
      {data.map(({ imageUrl, name }, index) => (
        <BreedInfoBox
          key={`${name}-${imageUrl}-${Date.now()}`}
          id={index}
          imageUrl={imageUrl}
          breedName={name}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default BreedResults;
