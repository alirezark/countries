import type { Pagination } from "@/types";
import axios from "@/utils/axios";

export async function loadCountries({
  page = 0,
  pageSize = 8,
}: Partial<Pagination> = {}) {
  const qr = JSON.stringify({ page, pageSize });

  const response = await axios.get(`/api/country/list?${qr}`);

  return response?.data;
}
