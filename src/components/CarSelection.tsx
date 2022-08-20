import { carList } from "../data/carList";
import { carData, currentPick } from "../types/carSelection";

interface dropdownProps {
  selection: currentPick;
  handleDropdown: (e: React.MouseEvent, category: string) => void;
}
const CarSelection = ({ selection, handleDropdown }: dropdownProps) => {
  const cars: carData = carList;

  return (
    <div>
      <div>
        <h1>Schedule a Test Drive</h1>
        <select
          className="carDropdown"
          onClick={(e: React.MouseEvent) => handleDropdown(e, "year")}
        >
          {Object.keys(cars)
            .map((index) => (
              <option
                selected={index === selection.year ? true : false}
                value={index}
                key={index}
              >
                {index}
              </option>
            ))
            .reverse()}
        </select>
        <select
          className="carDropdown"
          onClick={(e: React.MouseEvent) => handleDropdown(e, "brand")}
        >
          {Object.keys(cars[selection.year]).map((index) => (
            <option
              selected={index === selection.brand ? true : false}
              value={index}
              key={index}
            >
              {index}
            </option>
          ))}
        </select>
        <select
          className="carDropdown"
          onClick={(e: React.MouseEvent) => handleDropdown(e, "model")}
        >
          {Object.keys(cars[selection.year][selection.brand]).map((index) => (
            <option
              selected={index === selection.model ? true : false}
              value={index}
              key={index}
            >
              {index}
            </option>
          ))}
        </select>
        <select
          className="carDropdown"
          onClick={(e: React.MouseEvent) => handleDropdown(e, "trim")}
        >
          {Object.keys(
            cars[selection.year][selection.brand][selection.model]
          ).map((index) => (
            <option
              selected={index === selection.trim ? true : false}
              value={index}
              key={index}
            >
              {index}
            </option>
          ))}
        </select>
      </div>
      <img
        className={
          selection.brand === "Dodge" ? "dodgeDropdownImage" : "dropdownImage"
        }
        src={selection.image}
        alt={`${selection.year} ${selection.brand} ${selection.model} ${selection.trim}`}
      />
    </div>
  );
};

export default CarSelection;
