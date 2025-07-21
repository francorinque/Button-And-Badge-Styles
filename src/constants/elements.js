import { v4 as uuidv4 } from "uuid";
import { CATEGORIES } from "./categories";
import { classOfBadges, classOfButtons, classOfInputs } from "./arrayOfClass";

// create array of elements with id, text and class
const buttonsArray = classOfButtons.map((btn) => ({
  id: uuidv4(),
  text: "Button",
  classElement: `${btn} w-[150px] font-bold py-2`,
}));

const badgesArray = classOfBadges.map((badge) => ({
  id: uuidv4(),
  text: "Badge",
  classElement: `${badge} min-w-[80px]  p-1 rounded text-sm`,
}));

const inputsArray = classOfInputs.map((input) => ({
  id: uuidv4(),
  text: "Input",
  classElement: `${input} max-w-[250px]`,
}));

export const ELEMENTS = {
  [CATEGORIES.BUTTONS]: buttonsArray,
  [CATEGORIES.BADGES]: badgesArray,
  [CATEGORIES.INPUTS]: inputsArray,
};
