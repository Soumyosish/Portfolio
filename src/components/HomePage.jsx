import React from "react";
export default function HomePage() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center pt-2">
      <video
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}
