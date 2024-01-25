import { v4 as uuidv4 } from "uuid"
import { CATEGORIES } from "./categories"

const CLASS_BADGE = "px-10 py-2.5 text-xs rounded-full"
const CLASS_BUTTON =
  " border-none w-[150px] py-4 rounded-[4px] text-center hover:scale-110 transition duration-200 "

export const ELEMENTS = {
  [CATEGORIES.BUTTONS]: [
    {
      id: uuidv4(),
      category: "Button",
      classBtn: `bg-blue-500 text-white ${CLASS_BUTTON}`,
    },
    {
      id: uuidv4(),
      category: "Button",
      classBtn: `bg-teal-500 text-neutral-100 ${CLASS_BUTTON}`,
    },
  ],
  [CATEGORIES.BADGES]: [
    {
      id: uuidv4(),
      category: "Badge",
      classBtn: `bg-blue-100 text-blue-800  ${CLASS_BADGE}`,
    },
    {
      id: uuidv4(),
      category: "Badge",
      classBtn: `bg-green-100 text-green-800  ${CLASS_BADGE}`,
    },
    {
      id: uuidv4(),
      category: "Badge",
      classBtn: `bg-pink-100 text-pink-800  ${CLASS_BADGE}`,
    },
  ],
}
