import User from "./components/User";

export default function App() {
  const myFunction = (
    e: React.MouseEvent<HTMLButtonElement>,
    message: string
  ) => {
    alert(message);
  };

  const greet = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    console.log(e.nativeEvent);
  };
  return (
    <>
      <User
        message="해윙"
        count={10}
        isVisible={true}
        tags={["react", "ts", "js"]}
        user={{ id: 1, name: "youjin" }}
        myFunction={myFunction}
        greet={greet}
      />
    </>
  );
}
