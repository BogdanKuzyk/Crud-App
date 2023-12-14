const ClientForm = () => {
  return (
    <form>
      <div>
        <label>Name: </label>
        <input type="text"></input>
        <p className="error-text"></p>
      </div>
      <div>
        <label>Username: </label>
        <input type="text"></input>
        <p className="error-text"></p>
      </div>
      <div>
        <label>Email: </label>
        <input type="text"></input>
        <p className="error-text"></p>
      </div>
      <div>
        <label>City: </label>
        <input type="text"></input>
        <p className="error-text"></p>
      </div>
      <div>
        <label>Zipcode: </label>
        <input type="text"></input>
        <p className="error-text"></p>
      </div>
      <div>
        <label>Phone: </label>
        <input type="tel"></input>
        <p className="error-text"></p>
      </div>
      <div>
        <button>Save</button>
      </div>
    </form>
  );
};

export default ClientForm;
