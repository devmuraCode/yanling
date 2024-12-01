"use client";

import Link from "next/link";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { GrBottomCorner } from "react-icons/gr";
import MenuItem from "./MenuList";

const UserMenu: React.FC = () => {
  return (
    <div className="flex flex-col gap-7 md:flex-row">
      <Link href="/">
        <MenuItem label="Home" />
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center">
          <MenuItem label="Company" />
          <GrBottomCorner className="ml-0.5 text-sm" />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            <Link href="/news">
              <MenuItem label="News" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/about">
              <MenuItem label="About Us" />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/licenses">
              <MenuItem label="Licenses" />
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link href="/products">
        <MenuItem label="Products" />
      </Link>
      <Link href="/ourproducts">
        <MenuItem label="Our Products" />
      </Link>
      <Link href="/contacts">
        <MenuItem label="Contact Us" />
      </Link>
    </div>
  );
};

export default UserMenu;
