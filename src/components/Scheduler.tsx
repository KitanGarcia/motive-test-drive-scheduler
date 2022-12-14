import { SetStateAction, Dispatch } from "react";
import Calendar, { OnChangeDateCallback } from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface schedulerProps {
  date: Date;
  setDate: OnChangeDateCallback;
  time: String;
  setTime: Dispatch<SetStateAction<string>>;
}
const Scheduler = ({ date, setDate, time, setTime }: schedulerProps) => {
  const timeslots = [
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "1:00",
    "1:30",
    "2:00",
    "2:30",
    "3:00",
    "3:30",
    "4:00",
    "4:30",
    "5:00",
  ];

  const pm =
    (parseInt(time.split(":")[0]) <= 5 && parseInt(time.split(":")[0]) >= 1) ||
    parseInt(time.split(":")[0]) === 12
      ? true
      : false;

  return (
    <div className="calendarDiv">
      <h3>Select a date for your test drive</h3>
      <Calendar
        onChange={setDate}
        minDetail={"year"}
        minDate={new Date(new Date().setDate(new Date().getDate() + 1))}
        maxDate={new Date(new Date().setDate(new Date().getDate() + 15))}
        value={date}
        tileDisabled={({ date }) => date.getDay() === 0 || date.getDay() === 6}
      />
      <h3>{`${date.toLocaleString("default", {
        month: "long",
      })} ${date.getDate()}, ${date.getFullYear()}`}</h3>
      <div className="timePickerDiv">
        <h3>Schedule a time below</h3>
        <select
          className="timePicker"
          defaultValue={time as string}
          onClick={(e) => setTime((e.target as HTMLSelectElement).value)}
        >
          {timeslots.map((timeslot) => (
            <option key={timeslot}>{timeslot}</option>
          ))}
        </select>
        <h3 className="amPm">{pm ? "PM" : "AM"}</h3>
      </div>
    </div>
  );
};

export default Scheduler;
