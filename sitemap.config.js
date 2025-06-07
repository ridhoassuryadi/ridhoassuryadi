const fs = require("fs");
const yaml = require("yaml");

const raw = fs.readFileSync("config.yml", "utf8");
const config = yaml.parse(raw);

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: config?.seo?.url || "https://ridhoassuryadi.com",
  generateRobotsTxt: true,
};
