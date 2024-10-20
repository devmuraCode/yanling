"use client";

import { FC } from "react";
import Image from "next/image";
import img from "@/assets/header_slide_1.jpg";
import Button from "../Button";
interface IProps {
  label: string;
  description: string;
}

export const Card: FC<IProps> = ({ label, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image src={img} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Button
    
          label="explore"
          onClick={() => console.log("Hello World")}
        />
      </div>
    </div>
  );
};
