import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-r from-gray-800 to-gray-600 text-white flex flex-col justify-between">
     <nav className="top-4 right-8 flex space-x-6 text-sm justify-end ">
      <ul>
      <li className="hover:underline">Home</li>
      <li className="hover:underline">About</li>
      <li className="hover:underline">Contact</li>
      </ul>
      </nav>
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold">Tailwind CSS</h1>
        <button className="mt-4 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">Click Here</button>
    </div>
    </div>
  );
}
