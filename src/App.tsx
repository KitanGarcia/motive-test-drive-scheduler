import React, { useState } from "react";
import "./App.css";
import "./components/CarDropdown";
import CarDropdown from "./components/CarDropdown";
import { carList, initialCar } from "./data/carList";

function App() {
  const [currentSelection, setCurrentSelection] = useState(initialCar);

  // Sets state and prefills selection depending on input
  const handleDropdown = (e: React.MouseEvent, category: string) => {
    const value = (e.target as HTMLSelectElement).value;
    let current = {
      year: currentSelection.year,
      brand: currentSelection.brand,
      model: currentSelection.model,
      trim: currentSelection.trim,
      image: currentSelection.image,
    };
    if (category === "year") {
      const brands = carList[value];
      current.year = value;
      current.brand = Object.keys(brands)[0];
      current.model = Object.keys(brands[current.brand])[0];
      current.trim = Object.keys(brands[current.brand][current.model])[0];
      current.image = brands[current.brand][current.model][current.trim];
      setCurrentSelection(current);
    }
    if (category === "brand") {
      const models = carList[current.year][value];
      current.brand = value;
      current.model = Object.keys(models)[0];
      current.trim = Object.keys(models[current.model])[0];
      current.image = models[current.model][current.trim];
      setCurrentSelection(current);
    }
    if (category === "model") {
      const trims = carList[current.year][current.brand][value];
      current.model = value;
      current.trim = Object.keys(trims)[0];
      current.image = trims[current.trim];
      setCurrentSelection(current);
    }
    if (category === "trim") {
      const image = carList[current.year][current.brand][current.model][value];
      current.trim = value;
      current.image = image;
      setCurrentSelection(current);
    }
  };

  return (
    <div className="App">
      <h1>Schedule a Test Drive</h1>
      <CarDropdown
        selection={currentSelection}
        handleDropdown={handleDropdown}
      />
      <img
        className={
          currentSelection.brand === "Dodge"
            ? "dodgeDropdownImage"
            : "dropdownImage"
        }
        src={currentSelection.image}
        alt={`${currentSelection.year} ${currentSelection.brand} ${currentSelection.model} ${currentSelection.trim}`}
      />
    </div>
  );
}

export default App;
