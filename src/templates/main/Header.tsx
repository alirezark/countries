import React from "react";

import Iconify from "@/components/iconify";
import Button from "@/components/ui/button";

function Header() {
  const toggleDarkMode = () => {};

  return (
    <div className="bg-white px-2 shadow">
      <div className="mx-auto max-w-screen-2xl flex justify-between items-center py-4">
        <h1 className="text-xl font-extrabold">Where is the world?</h1>

        <Button
          onClick={toggleDarkMode}
          icon={<Iconify icon="material-symbols:dark-mode-outline-rounded" />}
        >
          Dark Mode
        </Button>
      </div>
    </div>
  );
}

export default Header;
