import { useRouter } from "next/router";
import React from "react";

import Iconify from "@/components/iconify";
import Button from "@/components/ui/button";

function Header() {
  const router = useRouter();
  const handleBack = () => {
    router.push("/");
  };
  return (
    <div className="my-8 md:mb-12 md:mt-8">
      <Button
        type="button"
        onClick={handleBack}
        elevated
        className="py-1 text-sm dark:bg-slate-700"
        icon={<Iconify icon="uil:arrow-left" />}
      >
        Back
      </Button>
    </div>
  );
}

export default Header;
