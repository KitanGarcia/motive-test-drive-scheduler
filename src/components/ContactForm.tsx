import { useState, MouseEvent, SetStateAction, Dispatch } from "react";
import Calendar, { OnChangeDateCallback } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { userInfo } from "../types/userInfo";

interface contactFormProps {
  contactInfo: userInfo;
  setContactInfo: Dispatch<SetStateAction<userInfo>>;
}

const ContactForm = ({ contactInfo, setContactInfo }: contactFormProps) => {
  return (
    <div className="contactForm">
      <input type="text" placeholder="First name" />
      <input type="text" placeholder="Last name" />
      <input type="text" placeholder="Phone number" />
      <input type="text" placeholder="Email" />
    </div>
  );
};

export default ContactForm;
