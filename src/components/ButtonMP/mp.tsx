import { NextApiRequest, NextApiResponse } from "next";
import mercadopago from "mercadopago";

mercadopago.configurations.setAccessToken(process.env.MP_ACCESS_TOKEN || "");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const preference = await mercadopago.preferences.create({
        items: [
          {
            title: "Mi producto",
            quantity: 1,
            unit_price: 100,
          },
        ],
      });

      res.status(200).json({ init_point: preference.body.init_point });
    } catch (error) {
      console.error("Error creating preference", error);
      res.status(500).json({ error: "Failed to create preference" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
