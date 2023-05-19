import type { NextApiRequest, NextApiResponse } from "next";

import type { Country, ResponseType } from "@/types";
import axios from "@/utils/axios";

type Response = ResponseType & { data?: Country };

const allowedMethods = ["GET"];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  try {
    if (!allowedMethods.includes(req.method!) || req.method === "OPTIONS") {
      return res.status(405).send({ message: "Method not allowed." });
    }

    const { name }: any = req.query;

    const countryResponse = await axios.get<any>(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
    );

    if (countryResponse?.data?.length > 0) {
      const country = countryResponse.data[0];

      if (country.borders?.length > 0) {
        const borders = await axios.get<any>(
          `https://restcountries.com/v3.1/alpha/?codes=${country.borders.join(
            ","
          )}`
        );
        country.borders = borders.data?.map((c: Country) => c.name.common);
      }

      // TODO: how to get only one country from api??
      return res.status(200).json({ data: countryResponse.data[0] });
    }

    return res.status(404).send({ message: "Country not found." });
  } catch (error) {
    // Catch and log errors - return a 500 with a message
    console.error(error);

    return res.status(500).send({ message: "Server error!" });
  }
}
