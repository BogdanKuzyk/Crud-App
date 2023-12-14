import { useState, useEffect } from "react";
import "./App.css";
import ClientForm from "./components/ClientForm";
import ClientsDisplay from "./components/ClientsDisplay";

const usersInfo = [];

function App() {
  const [users, setUsers] = useState(usersInfo);

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
      <ClientForm />
      <ClientsDisplay users={users} /> .
    </div>
  );
}

export default App;
