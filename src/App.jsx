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

{
  /* <div>
  <a href="https://vite.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<h1>Vite + React</h1>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <p>
    Edit <code>src/App.jsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p> */
}
