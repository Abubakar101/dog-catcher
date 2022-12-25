import BreedResults from "./BreedResults";
import BreedMessage from "./BreedMessage";
import { BreedFeedProps } from "../../lib/types";

const BreedFeed = ({ data, onDelete }: BreedFeedProps) => {
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
