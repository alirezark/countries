import React from "react";
import { overrideTailwindClasses } from "tailwind-override";
import Iconify from "@/components/iconify";

export type SearchInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  showEnter?: boolean;
};

function SearchInput({
  className,
  type = "text",
  showEnter,
  ...rest
}: SearchInputProps) {
  return (
    <div className="relative flex items-center mt-2">
      <span className="absolute text-gray-600 px-3">
        <Iconify icon="ic:baseline-search" />
      </span>

      <input
        type={type}
        className={overrideTailwindClasses(`block w-80 py-2.5 text-gray-800 font-semibold text-sm placeholder-gray-600/70 bg-white 
        shadow rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 
        focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring 
        focus:ring-opacity-40 ${className}`)}
        {...rest}
      />

      <span
        className={`absolute text-sky-700 transition-opacity text-sm font-semibold px-2 right-0 ${
          !showEnter && "opacity-0"
        }`}
      >
        enter
      </span>
    </div>
  );
}

export default SearchInput;
