import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString();

  let [date, setTime] = useState(now);

  function setDate() {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  }

  setInterval(setDate, 1000);

  return (
    <div className="container">
      <h1>{now}</h1>
      <button onClick={setDate}>Get Time</button>
    </div>
  );
}

export default App;
