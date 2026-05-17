import { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  // Stores all plant data retrieved from the server
  const [plants, setPlants] = useState([]);

  // Stores user search input
  const [searchQuery, setSearchQuery] = useState("");

  // Loads plant data when the page first renders
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  // Adds a newly created plant into state
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // Updates plant availability status
  function handleToggleSoldOut(id) {
    const updatedPlants = plants.map((plant) => {
      if (plant.id === id) {
        return {
          ...plant,
          soldOut: !plant.soldOut,
        };
      }

      return plant;
    });

    setPlants(updatedPlants);
  }

  // Filters plants based on user search input
  const filteredPlants = plants.filter((plant) =>
    plant.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <main>

      {/* Search component updates search state */}
      <Search onSearch={setSearchQuery} />

      {/* Form component creates new plants */}
      <NewPlantForm onAddPlant={handleAddPlant} />

      {/* Displays filtered plant results */}
      <PlantList
        plants={filteredPlants}
        onToggleSoldOut={handleToggleSoldOut}
      />

    </main>
  );
}

export default PlantPage;