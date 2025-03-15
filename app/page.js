import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="w-72 h-[400px] bg-white rounded-2xl shadow-lg flex flex-col items-center">
        {/* Screen */}
        <div className="w-full h-2/3 bg-gray-200 rounded-t-2xl flex items-center justify-center">
          <p className="text-lg font-bold">Welcome to my iPod Portfolio</p>
        </div>
        
        {/* Click Wheel */}
        <div className="w-full h-1/3 flex flex-col items-center justify-center">
          <div className="w-24 h-24 rounded-full border-4 border-black flex items-center justify-center relative">
            <button className="absolute top-0 text-sm">Menu</button>
            <button className="absolute left-0 text-sm">◀</button>
            <button className="absolute right-0 text-sm">▶</button>
            <button className="absolute bottom-0 text-sm">Play/Pause</button>
            <button className="w-10 h-10 rounded-full bg-black text-white">OK</button>
          </div>
        </div>
      </div>
    </div>
  );
}

