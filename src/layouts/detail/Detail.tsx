import React from "react";
import { Country } from "@/types";
import Header from "@/layouts/detail/Header";
import Info from "@/layouts/detail/Info";

export type DetailProps = {
  data: Country;
};

function Detail({ data }: DetailProps) {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-16 lg:space-x-32 space-y-8 items-center">
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
