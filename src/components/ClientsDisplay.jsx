const ClientsDisplay = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
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
