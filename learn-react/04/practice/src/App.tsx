import Child from "./components/child";

function Header() {
  return <header>Header</header>;
}
function Content() {
  return <main>Content</main>;
}
function Footer() {
  return <footer>Footer</footer>;
}

export default function App() {
  const message = "유진";
  const num = 430;
  const fruits = ["Apple", "Banana", "Cherry"];
  const user = { name: "youjin", age: 29 };
  const isLoggedIn = true;
  const onClick = () => {
    console.log("click");
  };
  const name = "유진";
  const value = ["a", "b"];
  const style = { fontSize: "50px", color: "blue" };
  return (
    <>
      <Child
        message={message}
        num={num}
        fruits={fruits}
        user={user}
        isLoggedIn={isLoggedIn}
        onClick={onClick}
        name={name}
        value={value}
        style={style}
        Header={<Header />}
        Content={<Content />}
        Footer={<Footer />}
      />
    </>
  );
}
