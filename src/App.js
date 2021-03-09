//hooks state example

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
