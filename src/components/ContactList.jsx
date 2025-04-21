import React from "react";
import { Link } from "react-router-dom";

function ContactList({ contacts = [], deleteContact }) {
  console.log("contacts, deleteContact", contacts);

  return (
    <div>
      {contacts.length === 0 ? (
        <p className="text-center text-gray-600">No contacts found.</p>
      ) : (
        contacts.map((contact) => (
          <div
            key={contact.id}
            className="mb-4 p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition duration-200 ease-in-out"
          >
            <h3 className="font-semibold text-xl text-indigo-700">{contact.name}</h3>
            <p className="text-gray-600">{contact.email}</p>
            <p className="text-gray-600">{contact.phone}</p>
            <div className="mt-4 flex justify-between">
              <Link to={`/edit/${contact.id}`} className="text-blue-500 hover:text-blue-700">
                Edit
              </Link>
              <button
                onClick={() => deleteContact(contact.id)}
                className="text-red-500 hover:text-red-700"
              >
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
