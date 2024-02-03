const nextRedirects = {
  redirects: async () => {
    return [
      {
        source: "/github",
        destination: "https://github.com/TheTeaCup/appalcart",
        permanent: true,
      },
      {
        source: "/live",
        destination: "/route-maps-and-schedules/live-transit",
        permanent: true,
      },
      {
        source: "/discord",
        destination: "https://discord.gg/9Fk75sXVZZ",
        permanent: false,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/AppalCART",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/appalcarttransit",
        permanent: true,
      },
    ];
  },
};

export default nextRedirects;
