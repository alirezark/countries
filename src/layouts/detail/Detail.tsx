import React from "react";

import Header from "@/layouts/detail/Header";
import Info from "@/layouts/detail/Info";
import type { Country } from "@/types";

export type DetailProps = {
  data: Country;
};

function Detail({ data }: DetailProps) {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 items-center space-y-8 md:grid-cols-2 md:space-x-16 lg:space-x-32">
        <div className="relative">
          <img src={data.flags.svg} alt={data.name.common} />
        </div>
        <div className="">
          <Info data={data} />
        </div>
      </div>
    </div>
  );
}

export default Detail;
