import { ELEMENTS } from "../constants/elements"
import { useAppContext } from "../context/AppContext"
//components
import Element from "./Element"

const ListOfElements = () => {
  const { category } = useAppContext()

  return (
    <div
      className="w-full p-8 mt-10
       grid grid-cols-elements gap-10 justify-center
    "
    >
      {ELEMENTS[category].map((btn) => (
        <Element key={btn.id} classBtn={btn.classBtn} />
      ))}
    </div>
  )
}
export default ListOfElements
