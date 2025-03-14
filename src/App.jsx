import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./header/Nav";
import Form from "./form/Form";

function App() {
  return (
    <>
      <Nav />
      <main className="main parent-container">
        <h2 className="title font-serif">
          <b>Separate more than one task with a comma ','</b>
        </h2>
        <div className="content">
          <Form />
        </div>
      </main>
    </>
  );
}

export default App;
