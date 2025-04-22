export default function App() {
  const imageUrls = [
    "https://cdn.pixabay.com/photo/2025/03/06/12/12/woman-9450756_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/02/14/15/28/walt-disney-world-2066168_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/05/10/13/10/river-7187070_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/02/21/05/15/pool-7025770_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/29/05/49/water-1867636_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/01/27/22/31/girl-3959203_640.jpg",
  ];
  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">JINSTAGRAM</h1>
        {/* More Buttons */}
      </header>
      <div className="grid grid-cols-3 gap-4">
        {imageUrls.map((url, index) => (
          <a key={index} className="group" href="#">
            <img
              src={url}
              width="400"
              height="400"
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
              style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
