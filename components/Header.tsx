import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className=" space-x-5">
      <Link href="/">home</Link>
      <Link href="/work">work</Link>
      <Link href="/">activites</Link>
      <Link href="/">resume</Link>
      <Link href="/">github</Link>
    </header>
  );
}
