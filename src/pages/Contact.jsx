// src/pages/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!form.message) newErrors.message = 'Message is required';
    
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Handle form submission logic here
      console.log('Form submitted', form);
    }
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        {errors.name && <span>{errors.name}</span>}
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
        <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
        {errors.message && <span>{errors.message}</span>}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;


