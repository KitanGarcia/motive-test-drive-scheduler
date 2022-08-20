import { useState, MouseEvent, SetStateAction } from "react";
import Calendar, { OnChangeDateCallback } from "react-calendar";

interface schedulerProps {
  date: Date;
  setDate: OnChangeDateCallback;
}
const Scheduler = ({ date, setDate }: schedulerProps) => {
  return (
    <div className="calendarDiv">
      <h3>Select a date for your test drive</h3>
      <Calendar
        onChange={setDate}
        minDate={new Date()}
        maxDate={new Date(new Date().setDate(new Date().getDate() + 14))}
        value={date}
        tileDisabled={({ date }) => date.getDay() === 0 || date.getDay() === 6}
      />
      <h3>{`${date.toLocaleString("default", {
        month: "long",
      })} ${date.getDate()}, ${date.getFullYear()}`}</h3>
    </div>
  );
};

export default Scheduler;
