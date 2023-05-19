import React from "react";
import Button from "@/components/ui/button";
import Iconify from "@/components/iconify";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const handleBack = () => {
    router.push("/");
  };
  return (
    <div className="mb-16 mt-10">
      <Button
        type="button"
        onClick={handleBack}
        elevated
        className="py-1 text-sm"
        icon={<Iconify icon="uil:arrow-left" />}
      >
        Back
      </Button>
    </div>
  );
}

export default Header;
