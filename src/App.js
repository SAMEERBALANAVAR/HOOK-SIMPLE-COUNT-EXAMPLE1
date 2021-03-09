import React, { useState } from "react";

function App() {
  const state = useState();

  //count is initial value for state and setcount is used to display updated count value
  const [count, setCount] = useState(0);

  function IncNum() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={IncNum}>click me</button>
    </div>
  );
}

export default App;
