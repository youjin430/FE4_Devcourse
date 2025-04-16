<<<<<<< HEAD
//import {css} from "@emotion/css";
import { hero } from "../css/styles.css";
=======
import { css } from "@emotion/css";
import { hero } from "./css/styles.css.ts";
>>>>>>> FE5_김기수

export default function App() {
  return (
    <>
<<<<<<< HEAD
      <h1>App Component</h1>
=======
      <h1
        className={css`
          color: red;
        `}
      >
        App Component
      </h1>
>>>>>>> FE5_김기수
      <h1 className={hero}>Vanilla Extract</h1>
    </>
  );
}
