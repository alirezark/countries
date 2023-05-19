import type { Pagination } from "@/types";
import axios from "@/utils/axios";
import { toQSString } from "@/utils/utils";

export async function loadCountries({
  page = 0,
  pageSize = 12,
}: Partial<Pagination> = {}) {
  const qs = toQSString({ page, pageSize });

  const response = await axios.get(`/api/country/list?${qs}`);

  return response?.data;
}
