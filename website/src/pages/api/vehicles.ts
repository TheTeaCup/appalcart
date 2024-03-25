import routesData from "../../data/vehicles-api.json";

const vehicles = () => {
    return new Response(JSON.stringify(routesData), {
        headers: {
            "content-type": "application/json",
        },
    });
}

export const runtime = "edge";
export default vehicles;