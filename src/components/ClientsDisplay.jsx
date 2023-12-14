import React, { useState } from "react";

const ClientsDisplay = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    Object.values(user).some((value) => {
      if (typeof value === "string") {
        return value.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (typeof value === "number") {
        return String(value).includes(searchTerm);
      }
      return false;
    })
  );

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search users..."
          onChange={handleSearch}
          value={searchTerm}
        />
      </div>
      {filteredUsers.map((user) => (
        <div key={user.id}>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>City:</strong> {user.address.city}
          </p>
          <p>
            <strong>Zipcode:</strong> {user.address.zipcode}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ClientsDisplay;
