interface Props {
  message: string;
  num: number;
  fruits: string[];
  user: { name: string; age: number };
  isLoggedIn: boolean;
  onClick: () => void;
  name?: string;
  value: string | number | unknown[];
  style: React.CSSProperties;
  Header: unknown;
  Content: unknown;
  Footer: unknown;
}
export default function Child(props: Props) {
  const name = props.name || "홍길동";
  return (
    <>
      <h2>{props.message}</h2>
      <h2>{props.num}</h2>
      <h2>{props.fruits.join(" ")}</h2>
      <h2>
        {props.user.name} {props.user.age}
      </h2>
      <h2>{props.isLoggedIn ? "로그인됨" : "로그인 안됨"}</h2>
      <h2>
        <button onClick={props.onClick}>클릭</button>
      </h2>
      <h2>{name}</h2>
      <h2>{JSON.stringify(props.value)}</h2>
      <h2 style={props.style}>Child Component</h2>
      {props.Header}
      {props.Content}
      {props.Footer}
    </>
  );
}
