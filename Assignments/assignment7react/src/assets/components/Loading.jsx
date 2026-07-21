// LoadingPage.jsx
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function LoadingPage({ brandName = "Sky Mart" }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#16213e]">
      <div className="flex flex-col items-center gap-5">
        {/* Bouncing logo icon */}
        <div className="flex h-16 w-16 items-center justify-center animate-bounce">
          <HiOutlineShoppingBag className="h-10 w-10 text-white" />
        </div>

        {/* Brand name */}
        <h1 className="text-2xl font-semibold tracking-wide text-white animate-[fadeIn_0.8s_ease_forwards_0.2s] opacity-0">
          {brandName}
        </h1>

        {/* Triple spinner rings */}
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-red-400 animate-spin" />
          <div
            className="absolute inset-2 rounded-full border-[3px] border-transparent border-t-yellow-300 animate-spin"
            style={{ animationDuration: "1.6s", animationDirection: "reverse" }}
          />
          <div
            className="absolute inset-4 rounded-full border-[3px] border-transparent border-t-sky-400 animate-spin"
            style={{ animationDuration: "2s" }}
          />
        </div>

        {/* Progress bar */}
        <div className="h-1.5 w-56 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-red-400 via-yellow-300 to-sky-400 animate-[slide_1.4s_ease-in-out_infinite]" />
        </div>

        {/* Loading text */}
        <p className="text-sm text-white/60 animate-[fadeIn_0.8s_ease_forwards_0.4s] opacity-0">
          Loading your shopping experience...
        </p>
      </div>
    </div>
  );
}