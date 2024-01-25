import { v4 as uuidv4 } from "uuid"
import { CATEGORIES } from "./categories"
import { classOfBadges, classOfButtons } from "./arrayOfClass"

// create array of elements with id, text and class
const buttonsArray = classOfButtons.map((btn) => ({
  id: uuidv4(),
  text: "Button",
  classElement: `${btn} w-[120px] font-bold py-1 px-8`,
}))

const badgesArray = classOfBadges.map((badge) => ({
  id: uuidv4(),
  text: "Badge",
  classElement: `${badge} px-2.5 py-1 rounded text-sm`,
}))

export const ELEMENTS = {
  [CATEGORIES.BUTTONS]: buttonsArray,
  [CATEGORIES.BADGES]: badgesArray,
}
