import styles from "./Footer.module.css";
<<<<<<< HEAD
import className from "classNames";
import classNames from "classnames/bind";
export default function Footer() {
  const isLoggedin = false;
=======
import className from "classnames";
import classNames from "classnames/bind";
export default function Footer() {
  const isLoggedin = true;
>>>>>>> FE5_김기수
  const cx = classNames.bind(styles);
  return (
    <>
      <footer>
<<<<<<< HEAD
        <h1 className={className({ title: true })}>title</h1>
        <p className={`${styles["greenyellow-color"]} ${styles.underline}`}>
          &copy; 2025 내 웹사이트. 모든 권리 보유.
        </p>
        <p className={cx({ "greenyellow-color": isLoggedin }, "underline")}>
          &copy; 2025 내 웹사이트. 모든 권리 보유.
=======
        <h1 className={className({ title: false })}>title</h1>
        <p className={`${styles["red-color"]} ${styles.underline}`}>
          &copy; 2024 내 웹사이트. 모든 권리 보유.
        </p>
        <p className={cx({ "red-color": isLoggedin }, "underline")}>
          &copy; 2024 내 웹사이트. 모든 권리 보유.
>>>>>>> FE5_김기수
        </p>
      </footer>
    </>
  );
}
