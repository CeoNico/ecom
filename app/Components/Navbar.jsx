import { navLinks } from "@/lib/const";
import { logo1, logo2 } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <Image src={logo1} alt="logo" className="p-5" />
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>{link.title}</Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
