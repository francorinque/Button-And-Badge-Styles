import { CATEGORIES } from "../constants/categories";

const Filters = ({ category, setCategory }) => {
  return (
    <nav className="flex items-center gap-3 mt-10">
      {Object.values(CATEGORIES).map((cat) => (
        <button
          onClick={() => setCategory(cat)}
          key={crypto.randomUUID()}
          className={`border border-violet-50 px-6 py-2 rounded-[8px] font-semibold 
            hover:bg-gradient-to-r from-violet-400 to-violet-600
            hover:text-white transition duration-200 ${
              category === cat
                ? "bg-gradient-to-r from-violet-400 to-violet-600"
                : ""
            }`}
        >
          {cat}
        </button>
      ))}
    </nav>
  );
};
export default Filters;
