import { useState } from "react"

const INITIAL_STATE = "Copy"

const Element = ({ classBtn, category }) => {
  const [isHover, setIsHover] = useState(false)
  const [textBtn, setTextBtn] = useState(INITIAL_STATE)

  const classFixed = `className="${classBtn.trim()}"`

  const handleClick = () => {
    navigator.clipboard.writeText(classFixed).then(() => setTextBtn("Copied"))
    setTimeout(() => {
      setTextBtn(INITIAL_STATE)
    }, 1000)
  }

  return (
    <button
      className={` relative ${classBtn} `}
      onClick={handleClick}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <span
        className={`transition-opacity duration-300 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${
          isHover ? "opacity-100" : "opacity-0"
        }`}
      >
        {textBtn}
      </span>
      <span
        className={`transition-opacity duration-300 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${
          isHover ? "opacity-0" : "opacity-100"
        }`}
      >
        {category}
      </span>
    </button>
  )
}
export default Element
