module.exports = {
  siteUrl: "https://datsukan.me",
  generateRobotsTxt: true,
  transform: async (config, path) => {
    return {
      loc: path === "/root" ? "/" : path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
