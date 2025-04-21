import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = ({ addContact }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return;
    addContact(form);
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
        className="w-full py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Add Contact
      </button>
    </form>
  );
};

export default AddContact;
