import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="flex items-center justify-center max-w-7xl mx-auto">
      <p className="text-gray-700">
        <span>&copy;</span> Jordan Dubrick, 2023
      </p>
    </footer>
  );
}
