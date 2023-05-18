export type Pagination = {
  page: number;
  pageSize: number;
  total: number;
};

export type ResponseType = {
  message?: string;
  pagination?: Pagination;
};
