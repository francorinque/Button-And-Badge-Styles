import { useState } from "react";
//components
import { Filters, Footer, ListOfElements } from "./components";
import { CATEGORIES } from "./constants/categories";

function App() {
  const [category, setCategory] = useState(CATEGORIES.BUTTONS);

  return (
    <main className="app ">
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950" />
      <header>
        <h1 className="text-gradient title font-semibold">
          Explore and copy Button & Badge Styles
        </h1>
        <Filters category={category} setCategory={setCategory} />
      </header>
      <ListOfElements category={category} />
      <Footer />
    </main>
  );
}

export default App;
