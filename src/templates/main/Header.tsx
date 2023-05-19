import { useTheme } from "next-themes";
import React from "react";

import Iconify from "@/components/iconify";
import Button from "@/components/ui/button";

function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const toggleDarkMode = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <div className="bg-white px-2 shadow dark:bg-slate-700">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between py-4">
        <h1 className="text-xl font-extrabold">Where is the world?</h1>

        <Button
          onClick={toggleDarkMode}
          icon={
            <Iconify
              icon={
                currentTheme === "dark"
                  ? "material-symbols:light-mode-outline"
                  : "material-symbols:dark-mode-outline-rounded"
              }
            />
          }
        >
          {currentTheme === "dark" ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>
    </div>
  );
}

export default Header;
