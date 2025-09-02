import { useState } from "react";

function App() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const handleLeftClick = () => {};

  const handleRightClick = () => {};

  return (
    <>
      <p>{clicks.left}</p>
      <p>{left}</p>
      <button onClick={handleLeftClick}></button>

      <p>{right}</p>
      <button onClick={handleRightClick}>Right</button>
      <p>{clicks.right}</p>
    </>
  );
}

export default App;
