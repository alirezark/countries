import React from "react";

import type { CountryResponse } from "@/api";
import CountryCard from "@/layouts/home/Country.card";

type HomeProps = {
  data: CountryResponse;
};

function Home({ data }: HomeProps) {
  const countries = data?.data || [];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4  gap-16">
        {countries.map((c) => (
          <CountryCard key={c.name.common} data={c} />
        ))}
      </div>
    </div>
  );
}

export default Home;
