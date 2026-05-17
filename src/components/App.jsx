import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  return (
    <div className="app">

      {/* Displays the application title/header */}
      <Header />

      {/* Displays all plant-related functionality */}
      <PlantPage />

    </div>
  );
}

export default App;