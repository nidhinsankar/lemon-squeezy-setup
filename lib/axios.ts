import axios from "axios";

const LEMON_SQUEEZY_BASE_URL = "https://api.lemonsqueezy.com/v1/";

export const LemonSqueezyApiInstance = axios.create({
  baseURL: LEMON_SQUEEZY_BASE_URL,
  headers: {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
    Authorization: `Bearer ${process.env.LEMON_SQUEEZY_API_KEY}`,
  },
});
