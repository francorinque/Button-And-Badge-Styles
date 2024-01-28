import { useState } from "react"

const INITIAL_STATE = "Copy"

const Element = ({ classElement, text }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [textChange, setTextChange] = useState(INITIAL_STATE)

  const classFixed = `className="${classElement.trim()}"`

  const handleClick = () => {
    navigator.clipboard
      .writeText(classFixed)
      .then(() => setTextChange("Copied"))
    setTimeout(() => {
      setTextChange(INITIAL_STATE)
    }, 1000)
  }

  return (
    <button
      className={`relative ${classElement} `}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? textChange : text}
    </button>
  )
}
export default Element
