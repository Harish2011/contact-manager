import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(storedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const updateContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) => (contact.id === updatedContact.id ? updatedContact : contact))
    );
  };

  return (
    <Router>
      <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-indigo-600 mb-6">
          React Contact Manager
        </h1>
        <nav className="flex justify-center space-x-6 mb-6">
          <Link to="/" className="text-lg text-indigo-500 hover:text-indigo-700">
            Home
          </Link>
          <Link to="/add" className="text-lg text-indigo-500 hover:text-indigo-700">
            Add Contact
          </Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<ContactList contacts={contacts} deleteContact={deleteContact} />}
          />
          <Route path="/add" element={<AddContact addContact={addContact} />} />
          <Route
            path="/edit/:id"
            element={<EditContact contacts={contacts} updateContact={updateContact} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
