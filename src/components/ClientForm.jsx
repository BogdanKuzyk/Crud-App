import React, { useState } from "react";

const ClientForm = ({ addNewUser }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");

  const [nameError, setNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [cityError, setCityError] = useState("");
  const [zipcodeError, setZipcodeError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);

    if (value.length < 5) {
      setNameError("Name should be more than 5 characters");
    } else {
      setNameError("");
    }
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);

    if (value.length < 5) {
      setUsernameError("Username should be more than 5 characters");
    } else {
      setUsernameError("");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.includes("@")) {
      setEmailError("Email should include @");
    } else {
      setEmailError("");
    }
  };

  const handleCityChange = (e) => {
    const value = e.target.value;
    setCity(value);

    if (value == "") {
      setCityError("You must add a city");
    } else {
      setCityError("");
    }
  };

  const handleZipcodeChange = (e) => {
    const value = e.target.value;
    setZipcode(value);

    if (!/^\d+$|-+$/.test(value)) {
      setZipcodeError("Zip code must contain only digits or a hyphen");
    } else {
      setZipcodeError("");
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);

    if (!/^(\+?\d+)?$/.test(value)) {
      setPhoneError("You must add a phone number");
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.length >= 5 &&
      username.length >= 5 &&
      email.includes("@") &&
      city !== "" &&
      /^\d+$|-+$/.test(zipcode) &&
      /^\+?\d+$/.test(phone)
    ) {
      const newUser = {
        name: name,
        username: username,
        email: email,
        address: {
          city: city,
          zipcode: zipcode,
        },
        phone: phone,
      };

      addNewUser(newUser);

      setName("");
      setUsername("");
      setEmail("");
      setCity("");
      setZipcode("");
      setPhone("");

      setNameError("");
      setUsernameError("");
      setEmailError("");
      setCityError("");
      setZipcodeError("");
      setPhoneError("");
    } else {
      if (name.length < 5) {
        setNameError("Name should be more than 5 characters");
      }
      if (username.length < 5) {
        setUsernameError("Username should be more than 5 characters");
      }
      if (!email.includes("@")) {
        setEmailError("Email should include @");
      }
      if (city == "") {
        setCityError("You must add a city");
      }
      if (!/^\d+$|-+$/.test(zipcode)) {
        setZipcodeError("Zip code must contain only digits or a hyphen");
      }
      if (!/^(\+?\d+)?$/.test(phone)) {
        setPhoneError("You must add a phone number");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input type="text" value={name} onChange={handleNameChange} />
        <p className="error-text">{nameError}</p>
      </div>
      <div>
        <label>Username: </label>
        <input type="text" value={username} onChange={handleUsernameChange} />
        <p className="error-text">{usernameError}</p>
      </div>
      <div>
        <label>Email: </label>
        <input type="text" value={email} onChange={handleEmailChange} />
        <p className="error-text">{emailError}</p>
      </div>
      <div>
        <label>City: </label>
        <input type="text" value={city} onChange={handleCityChange} />
        <p className="error-text">{cityError}</p>
      </div>
      <div>
        <label>Zipcode: </label>
        <input type="text" value={zipcode} onChange={handleZipcodeChange} />
        <p className="error-text">{zipcodeError}</p>
      </div>
      <div>
        <label>Phone: </label>
        <input type="tel" value={phone} onChange={handlePhoneChange} />
        <p className="error-text">{phoneError}</p>
      </div>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default ClientForm;
