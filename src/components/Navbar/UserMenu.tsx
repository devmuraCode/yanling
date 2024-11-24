"use client";

import MenuItem from "./MenuList";
import Link from "next/link";

const UserMenu: React.FC = () => {
  return (
    <div>
      <div className="flex">
        <>
          <Link href="/">
            <MenuItem label="Home" />
          </Link>
          <Link href="/products">
            <MenuItem label="Products" />
          </Link>
          <Link href="/ourproducts">
            <MenuItem label="Our Products" />
          </Link>
          <Link href="/solutions">
            <MenuItem label="Solutions" />
          </Link>
          <Link href="/news">
            <MenuItem label="News" />
          </Link>
          <Link href="/support">
            <MenuItem label="Support" />
          </Link>
          <Link href="/about">
            <MenuItem label="About Us" />
          </Link>
          <Link href="/contacts">
            <MenuItem label="Contact Us" />
          </Link>
        </>
      </div>
    </div>
  );
};

export default UserMenu;
