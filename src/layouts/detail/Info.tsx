import React from "react";

import Button from "@/components/ui/button";
import type { Country } from "@/types";
import { getAllObjectValue } from "@/utils/utils";
import Link from "next/link";

type InfoRowProps = {
  label: string;
  value: string;
};

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex items-center text-sm space-x-1 mt-2">
      <h2 className="font-semibold">{label}: </h2>
      <h3>{value}</h3>
    </div>
  );
}

export type InfoProps = {
  data: Country;
};

function Info({ data }: InfoProps) {
  return (
    <div>
      <h1 className="text-2xl font-extrabold mb-3">{data.name.common}</h1>
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
        <div>
          <InfoRow
            label="Native Name"
            value={getAllObjectValue(data.name.nativeName, "common").join(", ")}
          />
          <InfoRow label="Population" value={data.population} />
          <InfoRow label="Region" value={data.region} />
          <InfoRow label="Sub Region" value={data.subregion} />
          <InfoRow label="Capital" value={data.capital.join(", ")} />
        </div>
        <div>
          <InfoRow label="Top Level Domain" value={data.tld?.join(", ")} />
          <InfoRow
            label="Currencies"
            value={getAllObjectValue(data.currencies, "name").join(", ")}
          />
          <InfoRow
            label="Languages"
            value={getAllObjectValue(data.languages).join(", ")}
          />
        </div>
      </div>
      <div className="flex space-x-2 mt-16 items-baseline">
        <h3 className="text-sm font-semibold whitespace-nowrap">
          Border Countries:
        </h3>
        <div className="grow">
          {!!data?.borders && data.borders?.length > 0
            ? data.borders.map((border) => (
                <Link
                  key={border}
                  href={`/country/${border}`}
                  className="border-none"
                >
                  <Button
                    elevated
                    className="py-1 text-sm inline-block mr-1 mb-1"
                  >
                    {border}
                  </Button>
                </Link>
              ))
            : "---"}
        </div>
      </div>
    </div>
  );
}

export default Info;
