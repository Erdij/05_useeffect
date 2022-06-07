import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import React, { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(true); //#şarta bağlı render için.
  return (
    <div className="App">
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Comp</button>
      {isVisible && <ClassComponent />}
    </div>
  );
}

export default App;
