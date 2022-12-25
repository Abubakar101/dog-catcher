// Data Types
export type BreedData = {
  name: string;
  imageUrl: string;
};

export type BreedApiResponse = {
  status: string;
  message: string[];
};

// Custom Functions Params and response
export type CallBreedApiFunc = (url: string) => Promise<BreedApiResponse>;
export type GetRandomBreedDataFunc = (
  length: number,
  data: BreedApiResponse["message"]
) => string;
export type DeleteBreedFunc = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  id: number
) => void;

// Components Props
export interface BreedFeedProps {
  data: BreedData[];
  onDelete: DeleteBreedFunc;
}
export interface BreedInfoBoxProps {
  imageUrl: BreedData["imageUrl"];
  breedName: BreedData["name"];
  onDelete: DeleteBreedFunc;
  id: number;
}
export interface BreedResultsProps {
  data: BreedData[];
  onDelete: DeleteBreedFunc;
}
export interface InputFormProps {
  breedNames: BreedData["name"][];
  handleSubmit: (value: string) => Promise<void>;
}
export interface MidContainerProps {
  getRandomBreed: React.MouseEventHandler<HTMLButtonElement>;
  onDelete: DeleteBreedFunc;
}
