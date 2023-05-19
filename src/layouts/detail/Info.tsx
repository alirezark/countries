import Link from "next/link";
import React from "react";

import Button from "@/components/ui/button";
import type { Country } from "@/types";
import { getAllObjectValue } from "@/utils/utils";

type InfoRowProps = {
  label: string;
  value: string;
};

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="mt-2 flex items-center space-x-1 text-sm">
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
      <h1 className="mb-3 text-2xl font-extrabold">{data.name.common}</h1>
      <div className="flex flex-col space-y-8 md:flex-row md:space-x-16 md:space-y-0">
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
      <div className="mt-16 flex items-baseline space-x-2">
        <h3 className="whitespace-nowrap text-sm font-semibold">
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
                    className="mb-1 mr-1 inline-block py-1 text-sm dark:bg-slate-700"
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
