import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className=" space-x-5">
      <Link className="text-white border-b" href="/">
        home
      </Link>
      <Link className="text-white" href="/work">
        work
      </Link>
      <Link className="text-white" href="/">
        activites
      </Link>
      <Link className="text-white" href="/">
        resume
      </Link>
      <a
        className="text-white"
        href="https://github.com/ramim-ahmed"
        target="_blank"
      >
        github
      </a>
    </header>
  );
}
