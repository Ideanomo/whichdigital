import React from "react";
import "./css/styles";
import NumbersGrid from "./components/NumbersGrid";

function App() {
  return (
    <>
      <header>
        <h1 className="heading">Multiples App</h1>
        <p className="instructions">
          Use your keyboard to type a number below in the input box and press
          'Enter' to select it or use your mouse to scroll and click on a number
          to select it.
        </p>
      </header>
      <main>
        <NumbersGrid />
      </main>
    </>
  );
}

export default App;
