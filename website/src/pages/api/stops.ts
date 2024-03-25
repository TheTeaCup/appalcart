import routesData from "../../data/stops-api.json";

const stops = () => {
  return new Response(JSON.stringify(routesData), {
    headers: {
      "content-type": "application/json",
    },
  });
};

export const runtime = "edge";
export default stops;
