import { useState } from "react";

import CountButton from "./components/CountButton";
import CountDisplay from "./components/CountDisplay";

export default function App() {
  const [count, setCount] = useState(0);
  // 상태업데이트함수(값)
  // 상태업데이트함수(콜백함수)
  // setCount(10);
  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <CountDisplay count={count} />
      <CountButton increment={increment} decrement={decrement} reset={reset} />
    </>
  );
}
