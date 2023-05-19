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
        className={`relative z-10 flex justify-between w-56 items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md 
          shadow focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 
          dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none`}
      >
        <span className="mx-1">{value || label}</span>
        <div className="flex items-center">
          <Iconify icon="majesticons:chevron-down" />
        </div>
      </button>

      {!!isOpen && (
        <div className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow dark:bg-gray-800">
          {options.map((o) => (
            <button
              type="button"
              key={o.value}
              onClick={() => handleChange(o.value)}
              className={`w-full block px-4 py-1 text-sm text-gray-600 text-left capitalize 
                transition-colors duration-100 transform dark:text-gray-300 
                hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white
                ${o.value === value ? "text-gray-700 bg-gray-300" : ""}`}
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
