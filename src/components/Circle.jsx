const Circle = ({ classCircle }) => {
  return (
    <div
      className={`absolute size-[300px] rounded-full bg-[#374151]  blur-[100px] opacity-20 z-[-1] pointer-events-none ${classCircle}`}
    ></div>
  );
};
export default Circle;
