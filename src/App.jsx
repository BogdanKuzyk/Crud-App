import { useState, useEffect } from "react";
import "./App.css";
import ClientForm from "./components/ClientForm";
import ClientsDisplay from "./components/ClientsDisplay";

const usersInfo = [];

function App() {
  const [users, setUsers] = useState(usersInfo);

  const addNewUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const usersData = await response.json();
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>CRUD Application</h1>
      <div className="App">
        <div className="ClientForm">
          <ClientForm addNewUser={addNewUser} />
        </div>
        <div className="ClientsDisplay">
          <ClientsDisplay users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
