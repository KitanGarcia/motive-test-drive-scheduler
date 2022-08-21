import { SetStateAction, Dispatch, useRef, ChangeEvent } from "react";
import { userInfo } from "../types/userInfo";

interface contactFormProps {
  contactInfo: userInfo;
  setContactInfo: Dispatch<SetStateAction<userInfo>>;
  showFirstNameError: Boolean;
  showLastNameError: Boolean;
  showPhoneError: Boolean;
  showEmailError: Boolean;
}

const ContactForm = ({
  contactInfo,
  setContactInfo,
  showFirstNameError,
  showLastNameError,
  showPhoneError,
  showEmailError,
}: contactFormProps) => {
  const info = contactInfo;
  const handleForm = (e: ChangeEvent<HTMLInputElement>, key: string) => {
    info[key] = e.target.value;
    setContactInfo(info);
  };

  return (
    <div className="contactForm">
      <div>
        <input
          type="text"
          onChange={(e) => handleForm(e, "firstName")}
          placeholder="First name"
        />
        {showFirstNameError && <p>Please enter your first name</p>}
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => handleForm(e, "lastName")}
          placeholder="Last name"
        />
        {showLastNameError && <p>Please enter your last name</p>}
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => handleForm(e, "phoneNumber")}
          placeholder="Phone number"
        />
        {showPhoneError && <p>Please enter a valid phone number</p>}
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => handleForm(e, "email")}
          placeholder="Email address"
        />
        {showEmailError && <p>Please enter a valid email address</p>}
      </div>
    </div>
  );
};

export default ContactForm;
