import styles from "./AllQuotes.module.scss";
import QuoteCard from "../QuoteCard/QuoteCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Spinner/Spinner";

const AllQuotes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allQuotes, setAllQuotes] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getQuotes = async () => {
      try {
        const quotes = await axios.get("http://localhost:3001/quotes");
        setAllQuotes(quotes.data.quotes);
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
            {allQuotes.map((quote) => (
              <div key={quote._id}>
                <Link
                  to={`/quotes/${quote._id}`}
                  className={styles.link}
                  key={quote.id}
                >
                  <QuoteCard quotes={quote} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AllQuotes;
