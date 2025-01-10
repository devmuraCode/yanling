"use client";
import React, { useState } from "react";
import Container from "../Container";
import Logo from "./Logo";
import styles from "./Navbar.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Menu from "./Menu";
import { IoIosArrowDown } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.navbarContent}>
          <Logo />
          <div className={styles.contact}>
            <p>+998 98 776 66 88</p>
            <div className={styles.dropdown}></div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center cursor-pointer">
                  <IoIosArrowDown />
                  <span>O’z</span>
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="p-4 md:w-max">
                <DropdownMenuItem asChild>
                  <Link href="">O’zbekcha</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="" className={styles.a}>
                    Русский
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="" className={styles.a}>
                    English
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className={styles.menuToggle} onClick={toggleMenu}>
              {!isMenuOpen ? <BiMenuAltRight /> : <AiOutlineClose />}
              <p>Menu</p>
            </div>
          </div>
        </div>

        {isMenuOpen && <Menu />}
      </Container>
    </div>
  );
};
