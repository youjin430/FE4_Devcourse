<<<<<<< HEAD
export default function Header() {
  const style = { color: "blue", textDecoration: "underline" };
  return (
    <>
      <header>
        <h1 style={style}>내 웹사이트</h1>
=======
import styles from "./Footer.module.css";

export default function Header() {
  const style = { color: "red", textDecoration: "underline" };
  return (
    <>
      <header>
        <h1 className={styles.underline} style={style}>
          내 웹사이트
        </h1>
>>>>>>> FE5_김기수
      </header>
    </>
  );
}
