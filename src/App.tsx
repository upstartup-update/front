import React from "react";
import "./App.css";
import { Gallery, Group, Header } from "@vkontakte/vkui";

function App() {
  return (
    <div className="App">
      <Gallery slideWidth="90%" align="right">
        <div style={{ height: 150, backgroundColor: "var(--destructive)" }} />
        <div style={{ backgroundColor: "var(--button_commerce_background)" }} />
        <div style={{ backgroundColor: "var(--accent)" }} />
      </Gallery>
    </div>
  );
}

export default App;
