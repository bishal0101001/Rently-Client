import type { NextApiRequest, NextApiResponse } from "next";
import { myListings } from "src/services/fakeListingsService";

import { Listing } from "src/interface/Listings";

interface responseData {
  listings: Listing[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<responseData>
) {
  // if(req.user.id === )
  res.status(200).json({ listings: myListings });
}
