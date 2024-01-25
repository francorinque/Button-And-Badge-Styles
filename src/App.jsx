//components
import { Circle, Filters, Footer, ListOfElements } from "./components"

function App() {
  return (
    <main className="app">
      {/* background */}
      <>
        <Circle classCircle="right-0 top-0" />
        <Circle classCircle="left-0 bottom-0" />
      </>
      {/* content */}
      <h1
        className="
      text-4xl text-balance text-center my-5 font-semibold bg-gradient-to-r from-[#F0F0F0] to-[#9784FD] bg-clip-text text-transparent md:text-6xl max-w-[700px] mx-auto leading-[1.2] md:leading-[1.2] animate-fade-up animate-once animate-normal animate-fill-both 
      "
      >
        Explore and copy <strong>Button & Badge</strong> Styles
      </h1>
      <Filters />
      <ListOfElements />
      {/* footer */}
      <Footer />
    </main>
  )
}

export default App
