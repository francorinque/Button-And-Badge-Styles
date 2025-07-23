import { CATEGORIES } from "../constants/categories";
import { v4 as uuid } from "uuid";
import clsx from "clsx";

const Filters = ({ category, setCategory }) => {
  return (
    <nav className="flex items-center gap-3 mt-10 border border-amber-100 rounded-full">
      {Object.values(CATEGORIES).map((cat) => (
        <button
          onClick={() => setCategory(cat)}
          key={uuid()}
          className={`
            primary-button hover:bg-amber-200/70 hover:text-black
            ${
              cat === category &&
              "border border-amber-100 bg-amber-200 text-black"
            }
            `}
        >
          {cat}
        </button>
      ))}
    </nav>
  );
};
export default Filters;
