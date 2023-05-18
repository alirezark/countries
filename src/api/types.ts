import type { Pagination } from "@/types";

export type CountryName = {
  common: string;
};

export type Flags = {
  svg: string;
};

export type Country = {
  name: CountryName;
  population: string;
  flags: Flags;
  region: string;
  capital: string[];
};

export type CountryResponse = {
  data: Country[];
  pagination: Pagination;
};
