import type { NextApiRequest, NextApiResponse } from "next";

import type { Country, Pagination, ResponseType } from "@/types";
import axios from "@/utils/axios";

type User = ResponseType & { data: Country[] };

const allowedMethods = ["GET"];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  try {
    if (!allowedMethods.includes(req.method!) || req.method === "OPTIONS") {
      return res.status(405).send({ message: "Method not allowed.", data: [] });
    }

    const { page = 0, pageSize = 8 }: Partial<Pagination> = req.query;

    const countriesResponse = await axios.get(
      "https://restcountries.com/v3.1/all"
    );

    const countries =
      countriesResponse.data?.slice(
        page * pageSize,
        page * pageSize + pageSize
      ) || [];

    const pagination = {
      page,
      pageSize,
      total: countriesResponse.data?.length || 0,
    };

    return res.status(200).json({ data: countries, pagination });
  } catch (error) {
    // Catch and log errors - return a 500 with a message
    console.error(error);

    return res.status(500).send({ data: [], message: "Server error!" });
  }
}
