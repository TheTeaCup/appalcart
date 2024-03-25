import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

// Inside your useSelectedRoutes hook

const useSelectedRoutes = () => {
  const [selectedRoutes, setSelectedRoutes] = useState<number[]>([3]);

  useEffect(() => {
    const fetchSelectedRoutes = async () => {
      try {
        const storedRoutes = await AsyncStorage.getItem("selectedRoutes");
        if (storedRoutes !== null) {
          setSelectedRoutes(JSON.parse(storedRoutes));
        }
      } catch (error) {
        console.error("Error fetching selected routes:", error);
      }
    };

    fetchSelectedRoutes();
  }, []);

  const handleRouteSelection = async (routeId: number) => {
    const updatedRoutes = selectedRoutes.includes(routeId)
      ? selectedRoutes.filter((id) => id !== routeId)
      : [...selectedRoutes, routeId];

    try {
      await AsyncStorage.setItem(
        "selectedRoutes",
        JSON.stringify(updatedRoutes),
      );
      setSelectedRoutes(updatedRoutes);
    } catch (error) {
      console.error("Error saving selected routes:", error);
    }
  };

  return {
    selectedRoutes,
    handleRouteSelection,
  };
};

export default useSelectedRoutes;
