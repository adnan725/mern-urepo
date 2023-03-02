import styles from "./QouteForm.module.scss";
import React, { useState } from "react";
import axios from "axios";

const QouteForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [isCreatedQuote, setIsCreatedQuote] = useState(false);
  const [isQuoteWritten, setIsQuoteWritten] = useState(null);

  const handleFirstNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleHeadingChange = (event) => {
    setHeading(event.target.value);
  };

  const handleMessageChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name,
      email,
      heading,
      content,
    };

    axios
      .post("http://localhost:3001/quotes", data)
      .then((response) => {
        setIsQuoteWritten(response.data.quote.heading);
        setIsCreatedQuote(true);
        return response.statusText;
      })
      .catch((error) => {
        console.log(error);
      });

    setName("");
    setEmail("");
    setHeading("");
    setContent("");
  };
  return (
    <div className={styles.container}>
      {isCreatedQuote && (
        <p className={styles.success}>{`'${isQuoteWritten}' is created!`}</p>
      )}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={`${styles.firstName} ${styles.input}`}>
          <label>First Name:</label>
          <input
            type="text"
            value={name}
            placeholder="John"
            onChange={handleFirstNameChange}
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
        <div className={`${styles.heading} ${styles.input}`}>
          <label>Heading:</label>
          <input
            type="text"
            value={heading}
            placeholder="Benefits of Healty Life"
            onChange={handleHeadingChange}
          />
        </div>
        <div className={`${styles.qoute} ${styles.input}`}>
          <label>Article:</label>
          <textarea value={content} onChange={handleMessageChange} />
        </div>
        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default QouteForm;
