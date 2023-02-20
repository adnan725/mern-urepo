import styles from "./QouteForm.module.scss";
import React, { useState } from "react";

const QouteForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      message,
    };

    console.log(data);

    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={`${styles.firstName} ${styles.input}`}>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            placeholder="John"
            onChange={handleFirstNameChange}
          />
        </div>
        <div className={`${styles.lastName} ${styles.input}`}>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            placeholder="Smith"
            onChange={handleLastNameChange}
          />
        </div>
        <div className={`${styles.email} ${styles.input}`}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            placeholder="user@gmail.com"
            onChange={handleEmailChange}
          />
        </div>
        <div className={`${styles.qoute} ${styles.input}`}>
          <label>Message:</label>
          <textarea value={message} onChange={handleMessageChange} />
        </div>
        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default QouteForm;
