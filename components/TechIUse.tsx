/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
const skills: Array<{ id: number; title: string; img: string }> = [
  {
    id: 1,
    title: "javascript",
    img: "/next-logo.svg",
  },
  {
    id: 2,
    title: "typescript",
    img: "/next-logo.svg",
  },
  {
    id: 3,
    title: "react",
    img: "/next-logo.svg",
  },
  {
    id: 4,
    title: "react-native",
    img: "/next-logo.svg",
  },
  {
    id: 5,
    title: "redux",
    img: "/next-logo.svg",
  },
  {
    id: 6,
    title: "next.js",
    img: "/next-logo.svg",
  },
  {
    id: 7,
    title: "node",
    img: "/next-logo.svg",
  },
  {
    id: 9,
    title: "express",
    img: "/next-logo.svg",
  },
  {
    id: 10,
    title: "prisma",
    img: "/next-logo.svg",
  },
  {
    id: 11,
    title: "mongodb",
    img: "/next-logo.svg",
  },
  {
    id: 12,
    title: "postgresql",
    img: "/next-logo.svg",
  },
  {
    id: 13,
    title: "tailwindcss",
    img: "/next-logo.svg",
  },
  {
    id: 14,
    title: "shadcnui",
    img: "/next-logo.svg",
  },
];
export default function TechIUse() {
  return (
    <div className="mt-20">
      <h3 className="text-2xl text-white">tech i use 😍</h3>

      <div className="mt-4">
        {skills.map((tech) => (
          <button
            key={tech.id}
            className="border border-neutral-600 bg-neutral-800 rounded p-1 text-sm inline-flex items-center text-white leading-4 no-underline mr-4 mt-4"
          >
            {tech.title}
          </button>
        ))}
      </div>
    </div>
  );
}
