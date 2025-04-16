import styles from "./Footer.module.css";
import className from "classNames";
import classNames from "classnames/bind";
export default function Footer() {
  const isLoggedin = false;
  const cx = classNames.bind(styles);
  return (
    <>
      <footer>
        <h1 className={className({ title: true })}>title</h1>
        <p className={`${styles["greenyellow-color"]} ${styles.underline}`}>
          &copy; 2025 내 웹사이트. 모든 권리 보유.
        </p>
        <p className={cx({ "greenyellow-color": isLoggedin }, "underline")}>
          &copy; 2025 내 웹사이트. 모든 권리 보유.
        </p>
      </footer>
    </>
  );
}
