const fetchTesting = async () => {
    const routesFetch = await fetch(
        "https://appalcart.etaspot.net/service.php?service=get_routes",
    );
    const routesData = await routesFetch.json();
    console.log(routesData);

    const stopsFetch = await fetch(
        "https://appalcart.etaspot.net/service.php?service=get_stops",
    );
    const stopsData = await stopsFetch.json();
    console.log(stopsData);

    const vehiclesFetch = await fetch(
        "https://appalcart.etaspot.net/service.php?service=get_vehicles&includeETAData=1&inService=1&orderedETAArray=1",
    );
    const vehiclesData = await vehiclesFetch.json();
    console.log(vehiclesData);
};

fetchTesting();
