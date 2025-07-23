import { CATEGORIES } from "../constants/categories";
import { ELEMENTS } from "../constants/elements";
import clsx from "clsx";
//components
import Element from "./Element";

const ListOfElements = ({ category }) => {
  return (
    <div
      className={clsx(
        "w-full max-w-[1200px] grid place-content-center lg:content-center p-4 gap-8  min-h-[300px]",
        {
          "grid-cols-[repeat(auto-fill,minmax(120px,130px))]":
            category !== CATEGORIES.INPUTS,
          "grid-cols-[repeat(auto-fill,minmax(120px,200px))]":
            category === CATEGORIES.INPUTS,
        },
      )}
    >
      {ELEMENTS[category].map((el) => (
        <Element
          key={el.id}
          classElement={el.classElement}
          category={category}
          {...el}
        />
      ))}
    </div>
  );
};
export default ListOfElements;
