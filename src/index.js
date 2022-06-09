import React from "react";
import ReactDOM from "react-dom";

function App() {
  const firstName = "Ivan";
  const lastName = "carreno";

  return (
    <div>
      <h1>Hello World!</h1>
      <p>{`${firstName} ${lastName}`}</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
