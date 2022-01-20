import { descriptions } from "~/data/meta/descriptions";

export const siteConfig = {
  title: "datsukan",
  descriptions: descriptions,
  siteRoot: process.env.NODE_ENV === "production" ? "https://www.datsukan.me" : "http://localhost:3000",
};
