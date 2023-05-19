import React, { useState } from "react";

import Iconify from "@/components/iconify";

export type Option = {
  label: string;
  value: string;
};

export type SelectProps = {
  label: string;
  options: Option[];
  value?: string;
  onChange: (value?: string) => void;
};

function Select({ label, options, value, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (val: string) => {
    setIsOpen(false);
    onChange(val);
  };

  return (
    <div className="relative inline-block ">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`relative z-10 flex w-56 items-center justify-between rounded-md border border-transparent bg-white p-2 text-sm text-gray-600 
          shadow focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300 
          focus:ring-opacity-40 dark:bg-slate-700 dark:text-white dark:focus:ring-blue-400 dark:focus:ring-opacity-40`}
      >
        <span className="mx-1">{value || label}</span>
        <div className="flex items-center">
          <Iconify icon="majesticons:chevron-down" />
        </div>
      </button>

      {!!isOpen && (
        <div className="absolute right-0 z-20 mt-2 w-56 origin-top-right overflow-hidden rounded-md bg-white py-2 shadow dark:bg-slate-700">
          {options.map((o) => (
            <button
              type="button"
              key={o.value}
              onClick={() => handleChange(o.value)}
              className={`block w-full px-4 py-1 text-left text-sm capitalize text-gray-600 
                transition-colors duration-100 hover:bg-gray-200 dark:text-gray-300 
                dark:hover:bg-slate-800 dark:hover:text-white${
                  o.value === value
                    ? "bg-gray-300 text-gray-700 dark:bg-slate-800 dark:text-gray-300"
                    : ""
                }`}
            >
              {o.value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
