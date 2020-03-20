import React from "react";
import "./App.css";
import img from "./assets/teste.png";
import TechList from "./components/TechList";

function App() {
  return (
    <div className="App">
      <h1>Hello World!!!!!!</h1>
      <img src={img} height="200" alt="chanel" />
      <TechList></TechList>
    </div>
  );
}

export default App;
