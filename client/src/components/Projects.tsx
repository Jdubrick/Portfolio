import React from "react";

type Props = {};

export default function Projects({}: Props) {
  return (
    <div className="h-screen flex max-w-7xl mx-auto">
      <div className="flex justify-center grow pt-20">
        <h1 className="text-xl sm:text-3xl uppercase tracking-[12px] text-gray-600">
          Projects
        </h1>
      </div>
    </div>
  );
}
