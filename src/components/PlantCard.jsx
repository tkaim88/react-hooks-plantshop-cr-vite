function PlantCard({ plant, onToggleSoldOut }) {
  return (
    <div className="plant-card" data-testid="plant-item">
      
      {/* Displays plant image */}
      <img src={plant.image} alt={plant.name} />

      {/* Displays plant name */}
      <h4>{plant.name}</h4>

      {/* Displays plant price */}
      <p>Price: {plant.price}</p>

      {/* Toggles plant availability status */}
      <button onClick={() => onToggleSoldOut(plant.id)}>
        {plant.soldOut ? "Out of Stock" : "In Stock"}
      </button>
      
    </div>
  );
}

export default PlantCard;