import { useState } from "react"

const INITIAL_STATE = "Copy css"

const Element = ({ classBtn }) => {
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
      className={`border-none w-[150px] rounded-[4px]  shadow-sm text-center hover:scale-110 transition duration-200  ${classBtn} `}
      onClick={handleClick}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover ? (
        <span
          className="
          animate-pulse animate-thrice
        "
        >
          {textBtn}
        </span>
      ) : (
        <span>Button</span>
      )}
    </button>
  )
}
export default Element
