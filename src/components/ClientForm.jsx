import { useState } from "react";

const ClientForm = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleZipcodeChange = (e) => {
    setZipcode(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

    console.log(newUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input type="text" value={name} onChange={handleNameChange} />
        <p className="error-text"></p>
      </div>
      <div>
        <label>Username: </label>
        <input type="text" value={username} onChange={handleUsernameChange} />
        <p className="error-text"></p>
      </div>
      <div>
        <label>Email: </label>
        <input type="text" value={email} onChange={handleEmailChange} />
        <p className="error-text"></p>
      </div>
      <div>
        <label>City: </label>
        <input type="text" value={city} onChange={handleCityChange} />
        <p className="error-text"></p>
      </div>
      <div>
        <label>Zipcode: </label>
        <input type="text" value={zipcode} onChange={handleZipcodeChange} />
        <p className="error-text"></p>
      </div>
      <div>
        <label>Phone: </label>
        <input type="tel" value={phone} onChange={handlePhoneChange} />
        <p className="error-text"></p>
      </div>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default ClientForm;
