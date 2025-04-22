import { useState } from "react";
import Count from "./components/Count";

export default function App() {
  const [count, setCount] = useState(0);
  console.log("App Component");
  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      <Count />
    </>
  );
}
