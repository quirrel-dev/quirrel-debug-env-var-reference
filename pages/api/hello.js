// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { QuirrelClient } from "quirrel/client";

export default function handler(req, res) {
  const client = new QuirrelClient({
    async handler() {},
    route: "/api/hello",
  });

  res.status(200).json({ baseUrl: client.baseUrl, route: client.route });
}
