import type { Pagination } from "@/types";
import axios from "@/utils/axios";
import { toQSString } from "@/utils/utils";

export type LoadCountries = Partial<Pagination> & {
  name?: string | string[];
  region?: string | string[];
};

export async function loadCountries({
  page = 0,
  pageSize = 12,
  name,
  region,
}: LoadCountries = {}) {
  const qs = toQSString({ page, pageSize, name, region });

  const response = await axios.get(`/api/country/list?${qs}`);

  return response?.data;
}
