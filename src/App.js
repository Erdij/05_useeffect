import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import React, { useState } from "react";
import UseStateComp from "./components/UseStateComp";
import UseEffectComp from "./components/UseEffectComp";

function App() {
  const [isVisible, setIsVisible] = useState(true); //#şarta bağlı render için.
  return (
    <div className="App">
      {/* <button onClick={() => setIsVisible(!isVisible)}>Toggle Comp</button>
      {isVisible && <ClassComponent />} */}
      {/* koşullu renderdı yukarısı */}
      {/* <UseStateComp /> */}
      <UseEffectComp />
    </div>
  );
}

export default App;
