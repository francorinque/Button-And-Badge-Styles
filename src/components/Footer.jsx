const Footer = () => {
  return (
    <footer className="text-center flex-1 flex items-end justify-center text-1x w-full ">
      <p>
        <strong className="ml-2"> {new Date().getFullYear()}</strong>
        {" - "}
        Franco Rinque
      </p>
    </footer>
  )
}
export default Footer
