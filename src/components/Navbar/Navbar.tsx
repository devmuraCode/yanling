"use client";
import { useState, useEffect } from "react";
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
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "O’z"
  );

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const updateTranslations = async (languageCode: string) => {
    try {
      const translations = await fetchTranslations(languageCode);
      console.log("Updated translations:", translations);
    } catch (error) {
      console.error("Error updating translations:", error);
    }
  };

  const handleLanguageSelect = async (languageCode: any, languageName: any) => {
    setSelectedLanguage(languageName);
    localStorage.setItem("selectedLanguage", languageCode);
    console.log(`Selected language: ${languageCode}`);
    await updateTranslations(languageCode);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const language = localStorage.getItem("selectedLanguage") || "ru";
    updateTranslations(language);
  }, []);

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.navbarContent}>
          <Logo />
          <div className={styles.contact}>
            <p>+998 98 776 66 88</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center cursor-pointer">
                  <IoIosArrowDown />
                  <span>{selectedLanguage}</span>
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="p-4 md:w-max">
                <DropdownMenuItem asChild>
                  <Link
                    href="#"
                    onClick={() => handleLanguageSelect("uz", "O’zbekcha")}
                  >
                    O’zbekcha
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="#"
                    onClick={() => handleLanguageSelect("ru", "Русский")}
                  >
                    Русский
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="#"
                    onClick={() => handleLanguageSelect("en", "English")}
                  >
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
