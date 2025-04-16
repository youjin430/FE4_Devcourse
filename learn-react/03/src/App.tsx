// import styled from "styled-components";
import classNames from "classnames";
// CSS-IN-JS
// const Title = styled.h1`
//   font-size: 30px;
//   color: blue;
// `; //태그드 리터럴 템플릿

function Container() {
  const ishighlighted = true;
  const containerClass = classNames("common-class", {
    highlighted: ishighlighted,
  });
  return <div className={containerClass}>classnames</div>;
}
export default function App() {
  return (
    <>
      {/* <Title>App Component</Title> */}
      <Container></Container>
    </>
  );
}
