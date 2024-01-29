import { useState } from "react"
//components
import { Circle, Filters, Footer, ListOfElements } from "./components"

function App() {
  const [category, setCategory] = useState("Buttons")

  return (
    <main className="app">
      {/* background */}
      <>
        <Circle classCircle="right-0 top-0" />
        <Circle classCircle="left-0 bottom-0" />
      </>
      {/* content */}
      <header>
        <h1 className="title">
          Explore and copy <strong>Button & Badge</strong> Styles
        </h1>
        <Filters category={category} setCategory={setCategory} />
      </header>
      <ListOfElements category={category} />
      {/* footer */}
      <Footer />
    </main>
  )
}

export default App
