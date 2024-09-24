import Image from "next/image";
import React from "react";

export function Card() {
  return (
    <div className="container">
      <Image
        src="/illustration-article.svg"
        alt="Article illustration"
        width={336}
        height={201}
        className="rounded-xl md:w-full"
      />
      <div className="flex flex-col items-start gap-150 self-stretch">
        <span className="flex justify-center items-center gap-100 bg-yellow px-150 py-50 rounded-md font-extrabold text-gray-950 text-xs">
          Learning
        </span>
        <p className="font-medium text-xs">Published 21 Dec 2023</p>
        <p className="font-extrabold text-xl hover:text-yellow transition-all cursor-pointer">
          HTML & CSS foundations
        </p>
        <p className="font-medium text-gray-500 text-sm">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <div className="flex items-center gap-150 self-stretch">
        <Image src="/image-avatar.webp" alt="Avatar" width={32} height={32} />
        <span className="font-extrabold text-sm hover:text-yellow transition-all cursor-pointer">
          Greg Hooper
        </span>
      </div>
    </div>
  );
}
