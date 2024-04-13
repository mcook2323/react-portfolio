import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (!e.target.value.trim()) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const re = /\S+@\S+\.\S+/;
    if (!re.test(e.target.value)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    if (!e.target.value.trim()) {
      setMessageError('Message is required');
    } else {
      setMessageError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!name.trim()) {
      setNameError('Name is required');
    }
    if (!email.trim()) {
      setEmailError('Email is required');
    }
    if (!message.trim()) {
      setMessageError('Message is required');
    }
    // Submit form if no errors
    if (name.trim() && email.trim() && message.trim()) {
      // You can add your form submission logic here
      console.log('Form submitted');
      // Clear form fields
      setName('');
      setEmail('');
      setMessage('');
      // Set formSubmitted to true
      setFormSubmitted(true);
      // Clear confirmation message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }
  };

  return (
    <div>
      {formSubmitted && (
        <p>Form submitted successfully! We will get back to you soon.</p>
      )}
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
          {nameError && <p>{nameError}</p>}
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p>{emailError}</p>}
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
          ></textarea>
          {messageError && <p>{messageError}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
