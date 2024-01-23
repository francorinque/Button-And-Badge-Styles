const Circle = ({ classCircle }) => {
  return (
    <div
      className={`absolute size-[300px] rounded-full bg-[#9784FD]  blur-[100px] opacity-25 z-[-1] pointer-events-none ${classCircle}`}
    ></div>
  )
}
export default Circle
