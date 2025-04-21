import React from "react";
import { Link } from "react-router-dom";

function ContactList({ contacts, deleteContact }) {
  console.log("contacts, deleteContact", contacts);

  return (
    <div>
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        contacts.map((contact) => (
          <div key={contact.id} className="mb-2 border p-2 rounded">
            <h3 className="font-semibold">{contact.name}</h3>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <div className="mt-2">
              <Link to={`/edit/${contact.id}`} className="mr-2 text-blue-500">
                Edit
              </Link>
              <button onClick={() => deleteContact(contact.id)} className="text-red-500">
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ContactList;
