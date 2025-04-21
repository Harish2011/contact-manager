import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditContact = ({ contacts, updateContact }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const contactToEdit = contacts.find((c) => c.id === id);

  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    if (contactToEdit) setForm(contactToEdit);
  }, [contactToEdit]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContact({ id, ...form });
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-lg mx-auto p-4 border border-gray-200 rounded-lg shadow-md bg-white"
    >
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={form.name}
        className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={form.email}
        className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <input
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
        value={form.phone}
        className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="w-full py-2 text-white bg-green-600 hover:bg-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Update Contact
      </button>
    </form>
  );
};

export default EditContact;
