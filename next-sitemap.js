module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_APP_ENDPOINT ||
    "https://pokemon-next-gql-tonyeko.vercel.app/",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
