import { SetStateAction, Dispatch, ChangeEvent } from "react";
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
  const changeLabelColor = (field: string) => {
    const label = document.querySelector(`.${field}Label`);
    label?.classList.toggle("activeText");
  };

  return (
    <div className="contactForm">
      <div>
        <label className="firstNameLabel">First Name</label>
        <input
          type="text"
          onChange={(e) => handleForm(e, "firstName")}
          placeholder="John"
          onFocus={() => changeLabelColor("firstName")}
          onBlur={() => changeLabelColor("firstName")}
        />
        {showFirstNameError && <p>Please enter your first name</p>}
      </div>
      <div>
        <label className="lastNameLabel">Last Name</label>
        <input
          type="text"
          onChange={(e) => handleForm(e, "lastName")}
          placeholder="Doe"
          onFocus={() => changeLabelColor("lastName")}
          onBlur={() => changeLabelColor("lastName")}
        />
        {showLastNameError && <p>Please enter your last name</p>}
      </div>
      <div>
        <label className="phoneNumberLabel">Phone Number</label>
        <input
          type="text"
          onChange={(e) => handleForm(e, "phoneNumber")}
          placeholder="xxx-xxx-xxxx"
          onFocus={() => changeLabelColor("phoneNumber")}
          onBlur={() => changeLabelColor("phoneNumber")}
        />
        {showPhoneError && (
          <p>Please enter a valid phone number: xxx-xxx-xxxx</p>
        )}
      </div>
      <div>
        <label className="emailLabel">Email Address</label>
        <input
          type="text"
          onChange={(e) => handleForm(e, "email")}
          placeholder="email@example.com"
          onFocus={() => changeLabelColor("email")}
          onBlur={() => changeLabelColor("email")}
        />
        {showEmailError && <p>Please enter a valid email address</p>}
      </div>
    </div>
  );
};

export default ContactForm;
