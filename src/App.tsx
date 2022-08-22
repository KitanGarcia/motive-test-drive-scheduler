import React, { useState } from "react";
import "./App.css";
import CarSelection from "./components/CarSelection";
import Confirmation from "./components/Confirmation";
import ContactForm from "./components/ContactForm";
import Scheduler from "./components/Scheduler";
import { carList, initialCar } from "./data/carList";
import { userInfo } from "./types/userInfo";

function App() {
  const [currentSelection, setCurrentSelection] = useState(initialCar);
  const [contactInfo, setContactInfo] = useState({} as userInfo);
  const [showFirstNameError, setShowFirstNameError] = useState(false);
  const [showLastNameError, setShowLastNameError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPhoneError, setShowPhoneError] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Set first valid date to the nearest weekday
  // Or, if a weekday, the day after the current day
  const today = new Date();
  const [date, setDate] = useState(
    today.getDay() === 6
      ? new Date(new Date().setDate(today.getDate() + 2))
      : new Date(new Date().setDate(today.getDate() + 1))
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

  // Checks if phone number is valid (includes some international formats)
  const isValidPhone = () => {
    const regex =
      /^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/g;
    return regex.test(contactInfo.phoneNumber);
  };

  // Checks if email follows format of anything@anything.anything
  const isValidEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(contactInfo.email);
  };

  // Sets state of error messages; returns true if no errors
  const validateForm = () => {
    const firstNameError =
      !contactInfo.firstName || contactInfo.firstName.length === 0
        ? true
        : false;
    const lastNameError =
      !contactInfo.lastName || contactInfo.lastName.length === 0 ? true : false;
    const phoneError =
      !contactInfo.phoneNumber ||
      contactInfo.phoneNumber.length === 0 ||
      !isValidPhone()
        ? true
        : false;
    const emailError =
      !contactInfo.email || contactInfo.email.length === 0 || !isValidEmail()
        ? true
        : false;

    setShowFirstNameError(firstNameError);
    setShowLastNameError(lastNameError);
    setShowPhoneError(phoneError);
    setShowEmailError(emailError);

    return firstNameError || lastNameError || phoneError || emailError
      ? false
      : true;
  };

  // Returns a formatted date from selected time and date
  const formatDate = () => {
    let hour = parseInt(time.split(":")[0]);
    const minute = parseInt(time.split(":")[1]);
    if (1 <= hour && hour <= 5) {
      hour += 12;
    }

    const formatted = new Date(date.setHours(hour));
    formatted.setMinutes(minute);
    formatted.setSeconds(0);
    return formatted;
  };

  const handleSuccess = async () => {
    setShowConfirmation(true);
  };

  // Sends user's input for test drive to be scheduled
  const handleSubmit = () => {
    if (validateForm()) {
      const submission = {
        carSelection: currentSelection,
        appointment: formatDate(),
        contactInfo: contactInfo,
      };
      console.log(submission);
      handleSuccess();
    }
  };

  return (
    <div className="App">
      {!showConfirmation ? (
        <div>
          <CarSelection
            selection={currentSelection}
            handleDropdown={handleDropdown}
          />
          <Scheduler
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
          />
          <ContactForm
            contactInfo={contactInfo}
            setContactInfo={setContactInfo}
            showFirstNameError={showFirstNameError}
            showLastNameError={showLastNameError}
            showPhoneError={showPhoneError}
            showEmailError={showEmailError}
          />
          <button className="scheduleButton notCalendar" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      ) : (
        <Confirmation car={currentSelection} appointment={formatDate()} />
      )}
    </div>
  );
}

export default App;
