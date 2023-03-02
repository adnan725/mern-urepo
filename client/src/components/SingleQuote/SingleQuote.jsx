import styles from "./SingleQuote.module.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Spinner/Spinner";

const SingleQoute = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [quote, setQuote] = useState([]);

  const params = useParams();
  const quoteParam = params.id;

  useEffect(() => {
    setIsLoading(true);
    const getQuotes = async () => {
      try {
        const quotes = await axios.get("http://localhost:3001/quotes");
        const quotesData = await quotes.data.quotes;
        const q = await quotesData.find((qt) => qt._id === quoteParam);
        setQuote(q);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getQuotes();
  }, []);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.heading}>{quote.heading}</div>
            <div className={styles.mainBody}>
              <div className={`${styles.content} ${styles.introduction}`}>
                <h3>Introduction</h3>
                <p>{quote.content}</p>
              </div>
            </div>
            <div className={styles.author}>
              <p>Name: {quote.name}</p>
              <p>Email: {quote.email}</p>
              <p>Publish date: {}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleQoute;
