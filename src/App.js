//hooks state example

import React, { useState } from "react";

function App() {
  const state = useState("");

  //count is initial value for state and setcount is used to display updated count value
  const [count, setCount] = useState(0);

  function IncNum(change) {
    change.target.style.background = "green";
    setCount(count + 1);
  }
  function mouseOver(change) {
    change.target.style.background = "red";
  }
  function mouseOut(change) {
    change.target.style.background = "yellow";
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={IncNum} onMouseOver={mouseOver} onMouseOut={mouseOut}>
        click me
      </button>
    </div>
  );
}

export default App;

//props example

// import React from "react";
// import Names from "./Names";
// function App() {
//   return (
//     <div>
//       <Names first_name="sameer" last_name="Balanavar" age={25} />

//       <p></p>
//     </div>
//   );
// }

// export default App;
