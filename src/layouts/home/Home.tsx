import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";

import type { CountryResponse } from "@/api";
import { loadCountries } from "@/api";
import Loading from "@/components/loading";
import CountryCard from "@/layouts/home/Country.card";
import type { Country } from "@/types";

type HomeProps = {
  data: CountryResponse;
};

function Home({ data }: HomeProps) {
  const { inView, ref } = useInView();
  // const countries = data?.data || [];

  const {
    data: countriesData,
    isLoading,
    fetchNextPage,
  } = useInfiniteQuery(
    ["countries"],
    async ({ pageParam = 0 }) => {
      console.log("pagePARAM: ", pageParam);
      if (pageParam === 0) return data;
      const results = await loadCountries({ page: pageParam });
      return results;
    },
    {
      getNextPageParam: (lastPage) => +lastPage.pagination.page + 1,
    }
  );

  useEffect(() => {
    if (inView && !isLoading) fetchNextPage();
  }, [inView]);

  return (
    <div>
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-3  2xl:grid-cols-4">
        {countriesData?.pages.map((countries) =>
          countries.data?.map((c: Country) => (
            <CountryCard key={c.name.common} data={c} />
          ))
        )}
      </div>
      <div ref={ref}>
        <Loading />
      </div>
    </div>
  );
}

export default Home;
