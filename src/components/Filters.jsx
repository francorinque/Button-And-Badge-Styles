import { CATEGORIES } from "../constants/categories"
import { useAppContext } from "../context/AppContext"

const Filters = () => {
  const { setCategory } = useAppContext()

  return (
    <nav className="flex justify-center items-center gap-x-4 my-14">
      {Object.values(CATEGORIES).map((cat) => (
        <button
          onClick={() => setCategory(cat)}
          key={crypto.randomUUID()}
          className="
            text-1xl font-semibold border-none  
            py-2 px-8 rounded-full
            bg-gradient-to-br from-[#F0F0F0] to-[#9784FD] text-[#554a92]
            hover:scale-110 transition duration-200
          "
        >
          {cat}
        </button>
      ))}
    </nav>
  )
}
export default Filters
