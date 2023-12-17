import React, { useState, useEffect } from "react";
import "./ClientsDisplay.css";

const ClientsDisplay = ({ users: initialUsers }) => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    setUsers(initialUsers);
  }, [initialUsers]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    if (searchTerm === "") {
      setUsers(initialUsers);
    } else {
      filterUsers(searchTerm);
    }
  };

  const filterUsers = (searchTerm) => {
    const filteredUsers = initialUsers.filter((user) =>
      Object.values(user).some((value) => {
        if (typeof value === "string") {
          return value.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (typeof value === "number") {
          return String(value).includes(searchTerm);
        }
        return false;
      })
    );
    setUsers(filteredUsers);
  };

  const handleSort = () => {
    const sortedUsers = [...users].sort((a, b) => {
      const compareResult = a.name.localeCompare(b.name);
      return sortOrder === "asc" ? compareResult : -compareResult;
    });
    setUsers(sortedUsers);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search users..."
          onChange={handleSearch}
          value={searchTerm}
        />
        <button onClick={handleSort} className="sort-button">
          Sort
        </button>
      </div>

      <div className="client-display-aerea">
        {users.map((user) => (
          <div key={user.id} className="client-info">
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
              <strong>Phone:</strong> {user.phone}{" "}
            </p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsDisplay;
