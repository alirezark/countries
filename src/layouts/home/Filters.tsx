import { useRouter } from "next/router";
import React, { useState } from "react";

import SearchInput from "@/components/ui/searchInput";
import Select from "@/components/ui/select";

const regions = [
  {
    label: "Africa",
    value: "Africa",
  },
  {
    label: "America",
    value: "America",
  },
  {
    label: "Asia",
    value: "Asia",
  },
  {
    label: "Europe",
    value: "Europe",
  },
  {
    label: "Oceania",
    value: "Oceania",
  },
];

function Filters() {
  const { query, ...router } = useRouter();
  const { region, name } = query;
  const [searchedText, setSearchedText] = useState(name || "");

  const onSearchedTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedText(e.target.value);
  };

  const onRegionChange = (value?: string) => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...query,
          region: value,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const { value } = e.target as HTMLInputElement;

      router.push(
        {
          pathname: router.pathname,
          query: {
            ...query,
            name: value,
          },
        },
        undefined,
        { shallow: true }
      );
    }
  };

  return (
    <div className="flex justify-between items-center mb-6">
      <SearchInput
        value={searchedText}
        onChange={onSearchedTextChange}
        onKeyDown={onKeyDown}
        showEnter={searchedText?.length > 2 && name !== searchedText}
        placeholder="Search for a country..."
      />
      <Select
        label="Filter by Region"
        value={region?.toString()}
        onChange={(value) => onRegionChange(value)}
        options={regions}
      />
    </div>
  );
}

export default Filters;
