import "./styles.css";
import mock_data from "./mock_data.json";
import { useState } from "react";
// import Rows from "./Components/Rows";
import nanoid from "nanoid";
// import ReactPaginate from "react-paginate";

export default function App() {
  const [contacts, setContacts] = useState(mock_data);
  const [addPerson, setAddPerson] = useState({
    name: "",
    email_id: "",
    date: ""
  });

  const handleAddPerson = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newAddPerson = { ...addPerson };
    newAddPerson[fieldName] = fieldValue;

    setAddPerson(newAddPerson);
  };

  const handleAddPersonSubmit = (event) => {
    event.preventDefault();

    const newPerson = {
      id: nanoid(),
      name: addPerson.name,
      email_id: addPerson.email_id,
      date: addPerson.date
    };

    const newPersons = [...contacts, newPerson];
    setContacts(newPersons);
  };

  const handleDeletePerson = (contactID) => {
    const newPerson = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactID);
    newPerson.splice(index, 1);
    setAddPerson(newPerson);
  };

  return (
    <div className="App">
      <h1>Data</h1>
      <h2>Click on delete to remove row else add</h2>
      <form onSubmit={handleAddPersonSubmit}>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Enter full name"
          onChange={handleAddPerson}
        />
        <input
          type="email"
          name="email_id"
          required="required"
          placeholder="Enter email-id"
          onChange={handleAddPerson}
        />
        <input
          type="date"
          name="date"
          required="required"
          placeholder="Enter Date of Birth"
          onChange={handleAddPerson}
        />

        <button type="submit">Add Person</button>
      </form>

      <div class="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email-ID</th>
              <th>Date Of Birth</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr>
                <td>{contact.name}</td>
                <td>{contact.email_id}</td>
                <td>{contact.date_of_birth}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleDeletePerson(contact.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
