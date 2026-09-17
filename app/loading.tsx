export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <div className="flex space-x-2">
        <div className="h-3 w-3 animate-bounce rounded-full bg-[#E51D53] [animation-delay:-0.3s]"></div>
        <div className="h-3 w-3 animate-bounce rounded-full bg-[#E51D53] [animation-delay:-0.15s]"></div>
        <div className="h-3 w-3 animate-bounce rounded-full bg-[#E51D53]"></div>
      </div>
    </div>
  );
}
