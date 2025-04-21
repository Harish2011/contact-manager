import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddContact({ addContact }) {
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
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={form.name}
        className="block border p-1 w-full"
      />
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={form.email}
        className="block border p-1 w-full"
      />
      <input
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
        value={form.phone}
        className="block border p-1 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-1">
        Add
      </button>
    </form>
  );
}

export default AddContact;
