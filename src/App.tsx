import React, { useState } from "react";
import "./App.css";
import CarSelection from "./components/CarSelection";
import ContactForm from "./components/ContactForm";
import Scheduler from "./components/Scheduler";
import { carList, initialCar } from "./data/carList";
import { userInfo } from "./types/userInfo";

function App() {
  const [currentSelection, setCurrentSelection] = useState(initialCar);
  const today = new Date();
  const [contactInfo, setContactInfo] = useState({} as userInfo);
  const [showFirstNameError, setShowFirstNameError] = useState(false);
  const [showLastNameError, setShowLastNameError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPhoneError, setShowPhoneError] = useState(false);

  // set first valid date to the nearest weekday
  const [date, setDate] = useState(
    today.getDay() === 6
      ? new Date(new Date().setDate(today.getDate() + 2))
      : today.getDay() === 0
      ? new Date(new Date().setDate(today.getDate() + 1))
      : today
  );
  const [time, setTime] = useState("9:00");

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

  const isInvalidPhone = () => {
    return true;
  };

  const validateContactInfo = () => {
    setShowFirstNameError(
      !contactInfo.firstName || contactInfo.firstName.length === 0
        ? true
        : false
    );
    setShowLastNameError(
      !contactInfo.lastName || contactInfo.lastName.length === 0 ? true : false
    );
    setShowPhoneError(
      !contactInfo.phoneNumber ||
        contactInfo.phoneNumber.length === 0 ||
        isInvalidPhone()
        ? true
        : false
    );
    setShowEmailError(
      !contactInfo.email || contactInfo.email.length === 0 || isInvalidPhone()
        ? true
        : false
    );
    console.log(showFirstNameError);
    console.log(showLastNameError);
    console.log(showPhoneError);
    console.log(showEmailError);
    if (
      showFirstNameError ||
      showLastNameError ||
      showPhoneError ||
      showEmailError
    ) {
      return false;
    }
    return true;
  };

  // Sends user's input for test drive to be scheduled
  const handleSubmit = () => {
    console.log("SUBMIT");
    console.log(contactInfo);
    if (validateContactInfo()) {
      console.log("YEAH, we can send the data");
    } else {
      console.log("ERRORS");
    }
  };

  return (
    <div className="App">
      <CarSelection
        selection={currentSelection}
        handleDropdown={handleDropdown}
      />
      <Scheduler date={date} setDate={setDate} time={time} setTime={setTime} />
      <ContactForm
        contactInfo={contactInfo}
        setContactInfo={setContactInfo}
        showFirstNameError={showFirstNameError}
        showLastNameError={showLastNameError}
        showPhoneError={showPhoneError}
        showEmailError={showEmailError}
      />
      <button className="scheduleButton" onClick={handleSubmit}>
        Schedule Test Drive
      </button>
    </div>
  );
}

export default App;
