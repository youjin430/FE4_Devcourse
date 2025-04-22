import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="text-3xl underline">count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
    </>
  );
}
