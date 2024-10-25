"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export function LanguageMenu() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="en">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg"
              alt="United Kingdom Flag"
              width={24}
              height={16}
            />
            en
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="uz">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg"
              alt="Uzbekistan Flag"
              width={24}
              height={16}
            />
            uz
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="spa">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg"
              alt="Spanish Flag"
              width={24}
              height={16}
            />
            span
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
