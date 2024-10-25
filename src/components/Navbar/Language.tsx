"use client";

import { LanguageMenu } from "../LanguageMenu/LanguageMenu";

const Language = () => {
  return (
    <div className="">
      {/* <ul className="flex space-x-4 text-lg font-medium text-gray-700">
        <li className="relative after:content-[''] after:absolute after:right-[-10px] after:top-1/4 after:h-5 after:w-[1px] after:bg-gray-400 hover:text-blue-600 cursor-pointer transition-colors duration-200">
          English
        </li>
        <li className="relative after:content-[''] after:absolute after:right-[-10px] after:top-1/4 after:h-5 after:w-[1px] after:bg-gray-400 hover:text-blue-600 cursor-pointer transition-colors duration-200">
          Spanish
        </li>
        <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
          Русский
        </li>
      </ul> */}
      <LanguageMenu/>
    </div>
  );
};

export default Language;
