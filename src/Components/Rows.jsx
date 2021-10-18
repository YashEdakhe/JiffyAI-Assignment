import React from "react";

function Rows({ contact }) {
  return (
    <div>
      <tr>
        <td>{contact.name}</td>
        <td>{contact.email_id}</td>
        <td>{contact.date_of_birth}</td>
      </tr>
    </div>
  );
}

export default Rows;
