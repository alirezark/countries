import React from "react";
import { overrideTailwindClasses } from "tailwind-override";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  elevated?: boolean;
  children: React.ReactNode;
  icon?: JSX.Element;
};

function Button({ className, elevated, icon, children, ...rest }: ButtonProps) {
  const btnClassName =
    overrideTailwindClasses(`flex items-center px-4 py-2 font-medium tracking-wide text-gray-700 capitalize 
  transition-colors font-semibold duration-300 transform rounded-sm hover:bg-gray-300 active:bg-gray-400 dark:text-gray-100 
  dark:hover:bg-slate-800 ${elevated ? "shadow-md" : ""} ${className || ""}`);

  return (
    <button type="button" {...rest} className={btnClassName}>
      {icon}
      <span className="mx-1">{children}</span>
    </button>
  );
}

export default Button;
