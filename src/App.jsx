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
      <h1 className="title animate-fade-up animate-once animate-normal animate-fill-both ">
        Explore and copy Buttons & Badges Styles
      </h1>
      <Filters />
      <ListOfElements />
      {/* footer */}
      <Footer />
    </main>
  )
}

export default App
