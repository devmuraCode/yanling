"use client";

import { useState } from "react";
import Logo from "./Logo";
import Container from "../Container";
import UserMenu from "./UserMenu";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <div
      className={`transition duration-300 bg-white text-black ${styles.navbar}`}
    >
      <div className="border-b-[1px]">
        <div className="py-4">
          <Container>
            <div
              className={`flex items-center justify-between ${styles.navbarContent}`}
            >
              <Logo />

              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className={styles.menuToggle}
                >
                  {isMobileMenuOpen ? (
                    <AiOutlineClose className="text-2xl" />
                  ) : (
                    <AiOutlineMenu className="text-2xl" />
                  )}
                </button>
              </div>

              <div
                className={`md:flex ${
                  isMobileMenuOpen ? styles.menuItemsActive : styles.menuItems
                }`}
              >
                <UserMenu />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
