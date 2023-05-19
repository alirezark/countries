import type { NextApiRequest, NextApiResponse } from "next";

import { regions } from "@/constants/regions";
import type { Country, ResponseType } from "@/types";
import axios from "@/utils/axios";

type Response = ResponseType & { data: Country[] };

const allowedMethods = ["GET"];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  try {
    if (!allowedMethods.includes(req.method!) || req.method === "OPTIONS") {
      return res.status(405).send({ message: "Method not allowed.", data: [] });
    }

    const { page = 0, pageSize = 12, name, region }: any = req.query;

    const countriesResponse = await axios.get(
      regions.includes(region)
        ? `https://restcountries.com/v3.1/region/${region}`
        : "https://restcountries.com/v3.1/all"
    );

    let countries = countriesResponse.data || [];

    if (name?.trim()?.length > 2) {
      const regex = new RegExp(name.trim().split("").join(".*"), "i");
      countries = countries.filter((country: Country) => {
        return regex.test(country.name.common);
      });
    }

    const pagination = {
      page: +page,
      pageSize: +pageSize,
      total: countries?.length || 0,
    };

    countries = countries.slice(
      +page * +pageSize,
      +page * +pageSize + +pageSize
    );

    return res.status(200).json({ data: countries, pagination });
  } catch (error) {
    // Catch and log errors - return a 500 with a message
    console.error(error);

    return res.status(500).send({ data: [], message: "Server error!" });
  }
}
