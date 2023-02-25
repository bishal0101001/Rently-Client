import admin from "firebase-admin";
import { NextApiRequest, NextApiResponse } from "next";

const serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { uid } = req.body;

  const expiresIn = 60 * 1000;
  const token = await admin.auth().createCustomToken(uid, { expiresIn });

  res.status(200).json({ token });
};
