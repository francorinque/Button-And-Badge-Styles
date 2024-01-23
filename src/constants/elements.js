import { v4 as uuidv4 } from "uuid"
import { CATEGORIES } from "./categories"

export const ELEMENTS = {
  [CATEGORIES.BUTTONS]: [
    {
      id: uuidv4(),
      classBtn:
        "text-cyan-300 outline outline-1 outline-cyan-300 bg-gradient-to-tr from-cyan-950 to-cyan-800 py-2 px-8 rounded-[2px] ",
    },
    {
      id: uuidv4(),
      classBtn:
        "text-neutral-300 outline outline-1 outline-neutral-300 bg-gradient-to-tr from-neutral-950 to-neutral-800 py-2 px-8  rounded-[2px]",
    },
    {
      id: uuidv4(),
      classBtn:
        "text-green-300 outline outline-1 outline-green-300 bg-gradient-to-tr from-green-950 to-green-800 py-2 px-8  rounded-[2px]",
    },
    {
      id: uuidv4(),
      classBtn:
        "text-pink-300 outline outline-1 outline-pink-300 bg-gradient-to-tr from-pink-950 to-pink-800 py-2 px-8  rounded-[2px]",
    },
    {
      id: uuidv4(),
      classBtn:
        "text-lime-300 outline outline-1 outline-lime-300 bg-gradient-to-tr from-lime-950 to-lime-800 py-2 px-8  rounded-[2px]",
    },
    {
      id: uuidv4(),
      classBtn:
        "text-lime-100 outline outline-1 outline-lime-200 bg-gradient-to-tr from-lime-500 to-lime-600 py-2 px-8  rounded-[2px]",
    },
    {
      id: uuidv4(),
      classBtn:
        "text-sky-300 bg-gradient-to-tr from-sky-950 to-sky-800 py-2 px-8  rounded-[2px]",
    },
    {
      id: uuidv4(),
      classBtn:
        "text-rose-300 bg-gradient-to-tr from-rose-950 to-rose-800 py-2 px-8  rounded-[2px]",
    },
    {
      id: uuidv4(),
      classBtn:
        "text-rose-50 bg-gradient-to-tr from-rose-500 to-rose-600 py-2 px-8  rounded-[2px]",
    },
    {
      id: uuidv4(),
      classBtn:
        "text-emerald-300 bg-gradient-to-tr from-emerald-950 to-emerald-800 py-2 px-8  rounded-[2px]",
    },
    {
      id: uuidv4(),
      classBtn:
        "text-slate-300 bg-gradient-to-tr from-slate-950 to-slate-800 py-2 px-8  rounded-[2px]",
    },
  ],
  [CATEGORIES.BADGES]: [
    {
      id: uuidv4(),
      classBtn:
        "py-1 px-8 text-xs w-[120px]  text-slate-800 outline outline-1 outline-slate-800  bg-slate-200",
    },
    {
      id: uuidv4(),
      classBtn:
        "py-1 px-8 text-xs w-[120px] text-green-800 outline outline-1 outline-green-800 bg-green-200",
    },
    {
      id: uuidv4(),
      classBtn:
        "py-1 px-8 text-xs w-[120px] text-blue-800 outline outline-1 outline-blue-800 bg-blue-200",
    },
    {
      id: uuidv4(),
      classBtn:
        "py-1 px-8 text-xs w-[120px] text-green-300 outline outline-1 outline-green-300 bg-green-600",
    },
    {
      id: uuidv4(),
      classBtn:
        "py-1 px-8 text-xs w-[120px] text-gray-300 outline outline-1 outline-gray-300 bg-gray-600",
    },
  ],
}
