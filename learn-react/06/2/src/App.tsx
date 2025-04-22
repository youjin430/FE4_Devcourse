import { useState } from "react";
import lampOn from "./asset/images/b_on.png";
import lampOff from "./asset/images/b_off.png";

export default function App() {
  const [lamp, setLamp] = useState(true);
  const click = () => {
    setLamp((on) => !on);
  };
  return (
    <>
      <img src={lamp ? lampOn : lampOff} onClick={click} />
    </>
  );
}
