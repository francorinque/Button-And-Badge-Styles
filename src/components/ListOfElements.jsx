import { ELEMENTS } from "../constants/elements"
import { useSEO } from "../hooks/useSEO"
//components
import Element from "./Element"

const ListOfElements = ({ category }) => {
  return (
    <div className="list-wrapper">
      {ELEMENTS[category].map((el) => (
        <Element key={el.id} classElement={el.classElement} {...el} />
      ))}
    </div>
  )
}
export default ListOfElements
