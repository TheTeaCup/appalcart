import routesData from "../../data/routes-api.json";

const routes = () => {
    return new Response(JSON.stringify(routesData), {
        headers: {
            "content-type": "application/json",
        },
    });
}

export const runtime = "edge";
export default routes;