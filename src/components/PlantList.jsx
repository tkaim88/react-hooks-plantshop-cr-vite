import PlantCard from "./PlantCard";

function PlantList({ plants, onToggleSoldOut }) {
  return (
    <div className="plant-list">
      
      {/* Creates a plant card for every plant object */}
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onToggleSoldOut={onToggleSoldOut}
        />
      ))}

    </div>
  );
}

export default PlantList;