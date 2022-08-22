import { useState } from "react";
import { currentPick } from "../types/carSelection";
import Loader from "./Loader";

interface confirmationProps {
  car: currentPick;
  appointment: Date;
}

const Confirmation = ({ car, appointment }: confirmationProps) => {
  const [showLoader, setShowLoader] = useState(true);
  setTimeout(() => {
    setShowLoader(false);
  }, 2500);

  const day = appointment.toLocaleString("default", { weekday: "long" });
  const month = appointment.toLocaleString("default", { month: "long" });
  const date = appointment.getDate();
  const hours =
    appointment.getHours() > 12
      ? appointment.getHours() - 12
      : appointment.getHours();
  const minutes = appointment.getMinutes() === 0 ? "00" : "30";
  const pm = (hours <= 5 && hours >= 1) || hours === 12 ? true : false;

  return (
    <div>
      {showLoader ? (
        <Loader />
      ) : (
        <div className="confirmation">
          <h1>See you soon!</h1>
          <img
            className={
              car.brand === "Dodge"
                ? "dodgeConfirmationImage"
                : "confirmationImage"
            }
            alt="car_img"
            src={car.image}
          />
          <h2>
            You are scheduled to test drive the{" "}
            <strong>{`${car.year} ${car.brand} ${car.model} ${car.trim}`}</strong>{" "}
            on <br />
            <strong>{`${day}, ${month} ${date}`}</strong> at{" "}
            <strong>{`${hours}:${minutes} ${pm ? "PM" : "AM"}`}</strong>
          </h2>
          <h4>Please check your email for confirmation.</h4>
        </div>
      )}
    </div>
  );
};

export default Confirmation;
