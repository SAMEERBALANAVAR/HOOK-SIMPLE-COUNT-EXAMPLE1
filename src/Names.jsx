//react props example

import React from "react";

function Names(props) {
  return (
    <div>
      <h1>My first name is {props.first_name}</h1>
      <h1>My Last name is {props.last_name}</h1>
      <h1>And i am {props.age} years old</h1>
    </div>
  );
}

export default Names;
