import { descriptions, fqdn, title } from "~/data/meta";

export const siteConfig = {
  title: title,
  descriptions: descriptions,
  siteRoot: process.env.NODE_ENV === "production" ? fqdn : "http://localhost:3000",
};
