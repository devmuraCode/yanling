'use client';

import Image from "next/image";
import logo from "@/assets/logo.png"
import { useRouter } from "next/navigation";


const Logo = () => {
    const router = useRouter();

    return (
        <Image
            onClick={() => router.push('/')}
            className="hidden md:block cursor-pointer"
            src={logo}
            height="100"
            width="100"
            alt="Logo"
        />
    );
}

export default Logo;