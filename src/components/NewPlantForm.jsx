import { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  // Stores form input values for creating a new plant
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  // Sends plant data to the server and updates application state
  function handleSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        image: image || "./images/default.jpg",
        price,
      }),
    })
      .then((response) => response.json())
      .then((newPlant) => {
        // Adds the newly created plant to the existing plant list
        onAddPlant(newPlant);
      });

    // Clears form inputs after submission
    setName("");
    setImage("");
    setPrice("");
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Input for plant name */}
      <input
        type="text"
        placeholder="Plant name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Input for plant image URL */}
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      {/* Input for plant price */}
      <input
        type="number"
        step="0.01"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button type="submit">
        Add Plant
      </button>
    </form>
  );
}

export default NewPlantForm;