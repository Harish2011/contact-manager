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
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
  };

  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">React Contact Manager</h1>
        <nav className="mb-4">
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/add">Add Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ContactList contacts={contacts} deleteContact={deleteContact} />} />
          <Route path="/add" element={<AddContact addContact={addContact} />} />
          <Route path="/edit/:id" element={<EditContact contacts={contacts} updateContact={updateContact} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;