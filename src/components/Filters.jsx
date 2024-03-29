import { CATEGORIES } from "../constants/categories"

const Filters = ({ category, setCategory }) => {
  return (
    <nav className="filters-wrapper">
      {Object.values(CATEGORIES).map((cat) => (
        <button
          onClick={() => setCategory(cat)}
          key={crypto.randomUUID()}
          className={`filters_btn ${category === cat ? "active" : ""}`}
        >
          {cat}
        </button>
      ))}
    </nav>
  )
}
export default Filters
