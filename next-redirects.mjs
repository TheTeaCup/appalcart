const nextRedirects = {
  redirects: async () => {
    return [
      {
        source: "/github",
        destination: "https://github.com/TheTeaCup/appalcart",
        permanent: true,
      },
      {
        /* this isn't working?? */
        source: "/live",
        destination: "/route-maps-and-schedules/live-transit",
        permanent: true,
      },
    ];
  },
};

export default nextRedirects;
