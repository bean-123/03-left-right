import { useState } from "react";

function App() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  return (
    <>
      <p>{left}</p>
      <button onClick={() => setLeft(left + 1)}>Left</button>

      <p>{right}</p>
      <button onClick={() => setRight(left + 1)}>Right</button>
    </>
  );
}

export default App;
