/* eslint-disable react/no-unescaped-entities */
import AuthUse from "@/components/AuthUse";
import Description from "@/components/Description";
import Followed from "@/components/Followed";
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import TechIUse from "@/components/TechIUse";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Profile />
      <Description />
      <TechIUse />
      <AuthUse />
      <Followed />
    </>
  );
}
