import { useRef, useState } from "react";

export default function App() {
  const originalPictures = [
    "https://cdn.pixabay.com/photo/2025/03/06/12/12/woman-9450756_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/02/14/15/28/walt-disney-world-2066168_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/05/10/13/10/river-7187070_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/02/21/05/15/pool-7025770_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/29/05/49/water-1867636_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/01/27/22/31/girl-3959203_640.jpg",
  ];

  const [pictures, setPictures] = useState(originalPictures);
  const deledtedStack = useRef<string[]>([]);

  const handleDelete = (index: number) => {
    deledtedStack.current.push(pictures[index]);
    setPictures(pictures.filter((_, i) => i !== index));
  };

  const handleUndo = () => {
    if (deledtedStack.current.length === 0) return;

    const lastDeleted = deledtedStack.current.pop();
    if (lastDeleted) {
      setPictures((prev) => [...prev, lastDeleted]);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">JINSTAGRAM</h1>
        {/* More Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleUndo}
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full"
          >
            <img src="/undo.svg" alt="Moon icon" className="h-5 w-5" />
            <span className="sr-only">Toggle dark mode</span>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {pictures.map((value, index) => (
          <div className="group relative" key={index}>
            <a className="group" href="#">
              <img
                src={value}
                width="400"
                height="400"
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
                style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
              />
            </a>
            <button
              onClick={() => handleDelete(index)}
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black hover:bg-gray-300 h-10 w-10 absolute top-2 right-2 rounded-full"
            >
              <img src="/delete.svg" alt="Delete icon" className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
