import a from "./assets/images/a.jpg";
export default function App() {
  return (
    <>
      <h1 className="text-3xl underline">App Component</h1>
      <h1 className="text-3xl underline font-bold">App Component</h1>
      <h1>조선굴림체</h1>
      <img src="/images/b.jpg" />
      <div className="bg-b" />
      <h2 className="text-3xl">tailwind</h2>
      <div className="w-full h-[200px] bg-[url('/images/b.jpg')]"></div>
      <h1 className="text-3xl">src</h1>
      <img src={a} />
      <div className="bg-a" />
    </>
  );
}
