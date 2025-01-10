"use client";

import Image from "next/image";
import logo from "@/assets/logo.svg";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      className="cursor-pointer"
      src={logo}
      height="200"
      width="200"
      alt="Logo"
    />
  );
};

export default Logo;
