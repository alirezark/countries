import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";

import type { CountryResponse } from "@/api";
import { loadCountries } from "@/api";
import Loading from "@/components/loading";
import CountryCard from "@/layouts/home/Country.card";
import Filters from "@/layouts/home/Filters";
import type { Country } from "@/types";

type HomeProps = {
  data: CountryResponse;
  searchedText?: string;
  searchedRegion?: string;
};

function Home({ data, searchedText, searchedRegion }: HomeProps) {
  const { query } = useRouter();
  const { inView, ref } = useInView();

  const { name, region } = query;

  const {
    data: countriesData,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    ["countries", name, region],
    async ({ pageParam = 0 }) => {
      console.log("HI", name, searchedText, region, searchedRegion);
      const result =
        pageParam === 0 && name === searchedText && region === searchedRegion
          ? data
          : await loadCountries({ page: pageParam, name, region });

      return result;
    },
    {
      getNextPageParam: (lastPage) => {
        const { page, pageSize, total } = lastPage.pagination;
        return page * pageSize + pageSize < total ? page + 1 : undefined;
      },
    }
  );

  useEffect(() => {
    if (inView && !isFetchingNextPage) fetchNextPage();
  }, [inView]);

  return (
    <div>
      <Filters />
      {isLoading && !countriesData ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 gap-16 p-6 sm:grid-cols-2 md:grid-cols-3 md:p-0 2xl:grid-cols-4">
          {countriesData?.pages.map((countries) =>
            countries.data?.map((c: Country) => (
              <CountryCard key={c.name.common} data={c} />
            ))
          )}
        </div>
      )}
      {hasNextPage && (
        <div ref={ref}>
          <Loading />
        </div>
      )}
    </div>
  );
}

export default Home;
