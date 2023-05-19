import Image from "next/image";
import Link from "next/link";
import React from "react";

import type { Country } from "@/api";

type DetailRowProps = {
  title: string;
  description: string;
};

function DetailRow({ title, description }: DetailRowProps) {
  return (
    <div className="mt-3 flex items-center space-x-1 text-sm">
      <h4 className="font-semibold">{title}: </h4>
      <h5>{description}</h5>
    </div>
  );
}

export type CountryCardProps = {
  data: Country;
};

function CountryCard({ data }: CountryCardProps) {
  return (
    <Link href={`/country/${data.name.common}`} className="border-none">
      <div className="overflow-hidden rounded text-gray-800 decoration-0 shadow hover:bg-gray-100">
        <div className="relative" style={{ aspectRatio: "4/2.2" }}>
          <Image
            src={data.flags.svg}
            alt={data.name.common}
            quality={100}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="p-5">
          <h2
            className="overflow-hidden text-ellipsis whitespace-nowrap font-bold"
            title={data.name.common}
          >
            {data.name.common}
          </h2>
          <DetailRow title="Population" description={data.population} />
          <DetailRow title="Region" description={data.region} />
          <DetailRow
            title="Capital"
            description={data.capital?.join(", ") || "---"}
          />
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
