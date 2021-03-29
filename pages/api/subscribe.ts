// credits: Lee Robinson

import { isProd } from "@/lib/utils";
import { NextApiRequest, NextApiResponse } from "next";
const PROD_API = "https://api.buttondown.email/v1/subscribers";
const PROD_API_KEY = process.env.BUTTONDOWN_API_KEY;
const MOCK_API = process.env.MOCK_SUBSCRIBE_API;
const isMOCK = false;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, referrer_url } = req.body;

  let addSubscriberAPI: string;
  let API_KEY: string;

  if (!isProd && isMOCK) {
    addSubscriberAPI = MOCK_API;
    API_KEY = "";
    console.log(addSubscriberAPI);
  } else {
    addSubscriberAPI = PROD_API;
    API_KEY = PROD_API_KEY;
  }

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const response = await fetch(addSubscriberAPI, {
      body: JSON.stringify({
        email,
        tags: ["gourav.io"],
        referrer_url: referrer_url.substring(0, 500), // max length can be 500
      }),
      headers: {
        Authorization: `Token ${API_KEY}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    console.log("response: " + response.status);
    if (response.status >= 400) {
      const text = await response.text();

      if (text.includes("already subscribed")) {
        return res.status(400).json({
          error: `You're already subscribed to the newsletter :)`,
        });
      }

      return res.status(400).json({
        error: text,
      });
    }

    return res.status(201).json({ error: "" });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
