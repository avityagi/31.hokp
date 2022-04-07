import React, { useLayoutEffect, useState } from "react";

function App() {
  let today = new Date();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  // let time = new Date().toLocaleTimeString();
  // console.log(time);
  // // console.log("hello");
  let initialState = time;
  const [state, changeState] = useState(initialState);

  function currentTime() {
    today = new Date();
    time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    // let time = new Date().toLocaleTimeString();
    // console.log(time);

    changeState(time);
  }
  // setInterval(currentTime,1000);
  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={currentTime}>Get Time</button>
    </div>
  );
}

export default App;
