import type { NextApiRequest, NextApiResponse } from "next";
import { listingsData } from "src/services/fakeListingsService";

import { Listing } from "src/interface/Listings";

interface responseData {
  listings: Listing[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<responseData>
) {
  res.status(200).json({ listings: listingsData });
}
